import React from 'react'

export default function FooterComp(props) {
    let company = props.cname
  return (
    <div>Copyright &copy {company} all rights reserved</div>
  )
}
