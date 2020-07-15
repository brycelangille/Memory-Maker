import React, { useState } from 'react'
import './CreatePost.scss'
import { Redirect } from 'react-router-dom'
import { createPost } from '../../services/api-helper'

export default createAPost = (props) => {

  const [post, postData] = useState({
    User_id: '',
    image_url: '',
    captions: ''
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({
      ...product,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createProduct(product)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/posts`} />
  }
    return (
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-name"
          placeholder='Name'
          value={product.name}
          name='name'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-price"
          placeholder='Price'
          value={product.price}
          name='price'
          required
          onChange={handleChange}
        />
        <textarea
          className="textarea-description"
          rows={10}
          placeholder='Description'
          value={product.description}
          name='description'
          required
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder='Image Link'
          value={product.image_url}
          name='img_URL'
          required
          onChange={handleChange}
        />
        <button type='submit' className="submit-button">Submit</button>
      </form>
    )
  }