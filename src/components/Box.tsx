import type { ReactNode } from 'react'

function Box({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="box">
      <div className="box-header">{title}</div>
      <div className="box-body">{children}</div>
    </div>
  )
}

export default Box
