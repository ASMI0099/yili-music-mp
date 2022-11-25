const baseUrl = 'https://yili-music-20119-6-1315331975.sh.run.tcloudbase.com'

export const get = (uri: string) => {
  wx.showLoading({
    title: 'Loading.....'
  })


  return new Promise((resolve, reject)  => {
    wx.request({
      url: baseUrl + uri,
      method: 'GET',
      success: (res) => {
        handleHttpError(res, reject);
        resolve(res.data)
      },
      fail: reject,
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}

const handleHttpError = (response: any, reject: any) => {
  if (response.statusCode !== 200) {
    reject("请求异常")
  }
}