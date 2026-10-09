const regex = /\b(@)+\b/g

const correo = 'montiel23@gmail.com, khen3838@gamil.com, pablo@394090, jonatah'

for (const num of correo.matchAll(regex)) {
    console.log(num)
}