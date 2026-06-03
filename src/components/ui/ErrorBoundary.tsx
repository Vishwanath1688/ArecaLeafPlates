import { Component, type ErrorInfo, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toast } from './Toast'
import { createLogger } from '../../utils/logger'

const logger = createLogger('ErrorBoundary')

interface Props {
  children: ReactNode
  context?: string
}

interface State {
  hasError: boolean
  error: Error | null
}

/**
 * React Error Boundary — catches rendering errors in any child tree.
 * Shows a brief toast banner (auto-dismisses in 2.5s), logs to console.
 * The broken section renders nothing, so the rest of the page is unaffected.
 */
export class ErrorBoundary extends Component<Props, State> {
  private toastRoot: ReturnType<typeof createRoot> | null = null
  private toastContainer: HTMLDivElement | null = null

  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    const ctx = this.props.context ?? 'Unknown'
    logger.error(`Render error in "${ctx}": ${error.message}`, {
      error,
      componentStack: info.componentStack,
    })
    this.showToast(error.message)
  }

  private showToast(message: string) {
    try {
      // Mount a temporary toast outside the broken tree
      this.toastContainer = document.createElement('div')
      document.body.appendChild(this.toastContainer)
      this.toastRoot = createRoot(this.toastContainer)
      this.toastRoot.render(
        <Toast
          message={import.meta.env.DEV ? message : 'Something went wrong. Please refresh.'}
          type="error"
          duration={2500}
          onDismiss={() => this.dismissToast()}
        />
      )
    } catch (err) {
      logger.error('Failed to mount error toast', err)
    }
  }

  private dismissToast() {
    try {
      this.toastRoot?.unmount()
      this.toastContainer?.remove()
      this.toastRoot = null
      this.toastContainer = null
    } catch (err) {
      logger.error('Failed to unmount error toast', err)
    }
  }

  componentWillUnmount() {
    this.dismissToast()
  }

  render() {
    // If crashed, render nothing — page continues without this section
    if (this.state.hasError) return null
    return this.props.children
  }
}
