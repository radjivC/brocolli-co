import fetch from 'fetchival'

export class Subscribe {
  async post(user) {
    this.params = {
      email: user.email,
      name: user.name
    }

    const url = `https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth`
    const data = await fetch(url).post(this.params)
    return data
  }
}

export default new Subscribe()
