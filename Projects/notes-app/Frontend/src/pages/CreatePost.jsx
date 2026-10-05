const CreatePost = () => {
  return (
    <section className="create-post-section">
      <h1>Create Post</h1>
      <form>
            <input type="file" name="image" accept="image/*"/>
            <input type="text" name="caption" placeholder="enter caption" required/>
            <button type="submit">submit</button>
      </form>
    </section>
  )
}

export default CreatePost
