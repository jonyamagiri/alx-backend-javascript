import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = {
    status: 'pending',
    value: '',
  };
  const photo = {
    status: 'pending',
    value: '',
  };

  return Promise.all([
    signUpUser(firstName, lastName).then(
      (signup) => {
        user.status = 'fulfilled';
        user.value = signup;
      },
      (error) => {
        user.status = 'rejected';
        user.value = error.toString();
      },
    ),
    uploadPhoto(fileName).then(
      (upload) => {
        photo.status = 'fulfilled';
        photo.value = upload;
      },
      (error) => {
        photo.status = 'rejected';
        photo.value = error.toString();
      },
    ),
  ]).then(() => [user, photo]);
}
