import React, { Component } from 'react';
import { storage } from '../../Firebase';
import { observer, inject } from 'mobx-react';

@inject("recipeform")
@observer

class Picture extends Component {
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.handleUpload(image)
    }
  }
  handleUpload = (image) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed',
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.props.recipeform.handleInput("progress", progress);
      },
      (error) => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
          console.log(url);
          this.props.recipeform.handleInput("url", url);
        })
      });
  }
  render() {
    const style = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
      <div className="upload-pic-wrapper">
        <img className="upload-pic" src={this.props.recipeform.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400" />
        <div>
          <progress value={this.props.recipeform.progress} max="100" />
          <div className="upload-inp-btn-wrapper">
            <input type="file" onChange={this.handleChange} />
            <button onClick={this.handleUpload}>Upload</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Picture;

