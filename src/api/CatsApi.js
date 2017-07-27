

// fetch("/login", {
//   method: "POST",
//   body: form
// })

class CatsApi {
  static getAllCats() {
    return fetch('http://5978ffd78f22b00011d6f1a2.mockapi.io/api/v1/products/').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateCat(cat) {
    const request = new Request(`http://5978ffd78f22b00011d6f1a2.mockapi.io/api/v1/products/${cat.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({cat: cat})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createCat(cat) {
    const request = new Request('http://5978ffd78f22b00011d6f1a2.mockapi.io/api/v1/products', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({cat: cat})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteCat(cat) {
    const request = new Request(`http://5978ffd78f22b00011d6f1a2.mockapi.io/api/v1/products/${cat.id}`, {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default CatsApi;
