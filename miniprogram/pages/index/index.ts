// index.ts

import { sayHello } from "../../api/hello"

Page({
  data: {
    message: 'Hello World!!!!'
  },
  hi() {
    sayHello().then(data => {
      this.setData({
        message: data+''
      })
    })
  }
})
