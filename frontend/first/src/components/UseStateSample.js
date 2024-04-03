import React from 'react'
import { useState } from 'react'

const UseStateSample = () => {

  let name = "Oğuzhan"

  //ilk değer benim için get değeri yani readonly değeridir (fullname)
  //ikinci ise benim için set değeri yani değişiklik yapacağım değerdir(setFullName)
  //parantez içerisindeki değer benim başlangıç değerimdir ve boş da bırakılabilir.
  //fonksiyon hariç her şey başlangıç değeri olabilir. eğer boş bırakılırsa undefined olur.
  const [fullname, setFullname] = useState("Oğuz")

  const changeName = () => {
    console.log('Tıklandı')
    // name = "Oğuzhan Varlı"
    // console.log(name)
    setFullname("Oğuzhan Varlı")

  }

  return (
    <div>
      <h1>{fullname}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default UseStateSample