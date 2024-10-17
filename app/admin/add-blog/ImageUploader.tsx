import { rejects } from 'assert';
import React, { useState } from 'react'

function ImageUploader({onChange} : {onChange : Function}) {

    const [imageData, setImageData] = useState<string>("");

  async function handleChange(e: any){
    e.preventDefault();

    const file = e.target.files[0];
    const base64img = await convertToBase64(file);
    console.log(base64img);
    setImageData(String(base64img));
    onChange(base64img);
  }

  return (
    <div>
        <label htmlFor="img-input" >
            Upload Image...
            <img src={imageData || "/thumbnail_600x400.png"} width={400} alt="" />
        </label>
        <input 
            className='hidden' 
            name='img-input'
            id='img-input' 
            type="file" 
            accept='.jpeg, .png, .webp, .jpg' 
            onChange={(e) => handleChange(e)} />
    </div>
  )
}

export default ImageUploader

function convertToBase64(file: File){
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        }

        fileReader.onerror = (err) => {
            reject(err);
        }
    })
}