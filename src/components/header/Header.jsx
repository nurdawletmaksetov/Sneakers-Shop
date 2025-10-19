import React from 'react'

export const Header = () => {
  return (
    <>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/images/logo.png" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <ShoppingCart  />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/images/user.svg" />
          </li>
        </ul>
      </header>
    </>
  )
}
