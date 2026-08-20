import { Component } from "react";

export class WebGLGuard extends Component {
  constructor(props) {
    super(props);
    this.state = { ok: true };
  }

  static getDerivedStateFromError() {
    return { ok: false };
  }

  render() {
    if (!this.state.ok) return this.props.fallback ?? null;
    return this.props.children;
  }
}
