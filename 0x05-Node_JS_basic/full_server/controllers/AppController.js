class AppController {
  static getHomepage(request, response) {
    const message = 'Hello Holberton School!';
    response.status(200).send(message);
  }
}

export default AppController;
