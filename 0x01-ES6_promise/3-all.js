import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((resp) => {
      const [photoResp, userResp] = resp;
      const { body } = photoResp;
      const { firstName, lastName } = userResp;
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
