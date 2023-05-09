'use client'
import React, { useState } from 'react'
import { Notify } from './Notify'
import obj from '../ts/db'

export const Modal = () => {
  const [updatedObj, setUpdatedObj] = useState([...obj])
  const [total, setTotal] = useState()

  const totalNotify = updatedObj.filter((num) => {
    return num.status === 'unread'
  })

  const handleRead = () => {
    const updatedData = updatedObj.map((item) => {
      if (item.status === 'unread') {
        return { ...item, status: 'read' }
      }
      return item
    })
    setUpdatedObj(updatedData)
  }
  const handleClick = (id: number) => {
    const updatedData = updatedObj.map((item) => {
      if (item.id === id && item.status === 'unread') {
        return { ...item, status: 'read' }
      }
      return item
    })
    setUpdatedObj(updatedData)
  }

  return (
    <article className="modal">
      <section className="modal__main">
        <h2 className="modal__title">
          Notifications
          {totalNotify.length > 0 ? (
            <span className="modal__num">{totalNotify.length}</span>
          ) : null}
        </h2>
        <button className="modal__read" onClick={() => handleRead()}>
          Mark all as read
        </button>
      </section>
      {updatedObj.map((notify) => (
        <Notify notify={notify} key={notify.id} handleClick={handleClick} />
      ))}
    </article>
  )
}
