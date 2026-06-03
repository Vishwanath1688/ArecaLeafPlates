/**
 * SKE Website — Logger Utility
 * Structured logging with levels, context tagging, and dev/prod separation.
 * In production, only WARN and ERROR are emitted. DEBUG/INFO are dev-only.
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error'

const IS_DEV = import.meta.env.DEV

const LEVEL_PRIORITY: Record<LogLevel, number> = {
  debug: 0,
  info:  1,
  warn:  2,
  error: 3,
}

// In production only warn/error; in dev all levels
const MIN_LEVEL: LogLevel = IS_DEV ? 'debug' : 'warn'

const STYLES: Record<LogLevel, string> = {
  debug: 'color:#7FB069;font-weight:bold',
  info:  'color:#2D6A2D;font-weight:bold',
  warn:  'color:#B8860B;font-weight:bold',
  error: 'color:#C0392B;font-weight:bold',
}

function shouldLog(level: LogLevel): boolean {
  return LEVEL_PRIORITY[level] >= LEVEL_PRIORITY[MIN_LEVEL]
}

function format(level: LogLevel, context: string, message: string): string {
  const ts = new Date().toISOString().split('T')[1].replace('Z', '')
  return `[SKE][${ts}][${level.toUpperCase()}][${context}] ${message}`
}

function log(level: LogLevel, context: string, message: string, ...args: unknown[]) {
  if (!shouldLog(level)) return

  const formatted = format(level, context, message)

  switch (level) {
    case 'debug':
      console.debug(`%c${formatted}`, STYLES.debug, ...args)
      break
    case 'info':
      console.info(`%c${formatted}`, STYLES.info, ...args)
      break
    case 'warn':
      console.warn(`%c${formatted}`, STYLES.warn, ...args)
      break
    case 'error':
      console.error(`%c${formatted}`, STYLES.error, ...args)
      break
  }
}

/**
 * Create a scoped logger for a specific context (component or module name).
 * Usage:
 *   const logger = createLogger('ExportSection')
 *   logger.info('Form submitted')
 *   logger.error('Submission failed', error)
 */
export function createLogger(context: string) {
  return {
    debug: (message: string, ...args: unknown[]) => log('debug', context, message, ...args),
    info:  (message: string, ...args: unknown[]) => log('info',  context, message, ...args),
    warn:  (message: string, ...args: unknown[]) => log('warn',  context, message, ...args),
    error: (message: string, ...args: unknown[]) => log('error', context, message, ...args),
  }
}

// Root logger for App-level events
export const logger = createLogger('App')
