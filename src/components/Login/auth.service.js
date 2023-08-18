import axios from 'axios';
import ServerUrl from '../../Baseurl/ServerURL';
class AuthService {
  login(Email, Name) {
    return axios(ServerUrl + '/adminLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: JSON.stringify({
        email: Email,
        name: Name,
      }),
    })
      .then((res) => {
        console.log('responce login', res.data);
        if (res.data.token) {
          localStorage.setItem('admin', JSON.stringify(res.data));
        }
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        console.log('error happned');
      });
  }

  logout() {
    localStorage.removeItem('admin');
    window.location.reload();
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('admin'));
  }

  isAuthenticated() {
    return localStorage.getItem('user');
  }
}

export default new AuthService();
