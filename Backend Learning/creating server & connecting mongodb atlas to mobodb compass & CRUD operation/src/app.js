const express = require("express")
const app = express()
const noteModel = require("./models/note.model")

app.use(express.json())
app.post('/notes',async(req,res)=>{
      const data = req.body
      
      await noteModel.create({
            title:data.title,
            description:data.description
      })

      res.status(201).json({
            message: "note has been created <successfully></successfully>"
      })

})

app.get('/notes',async(req,res)=>{
      const notes = await noteModel.find()
      res.status(200).json({
            message:"notes has been fetched successfully",
            notes:notes
      })
})

app.delete('/notes/:id',async(req,res)=>{
      const id = req.params.id
      const notes = await noteModel.findOneAndDelete({
            _id:id
      })

      res.status(200).json({
            message:"note has been deleted successfully"
      })
})

app.patch('/notes/:id',async(req,res)=>{
      const id = req.params.id
      const description = req.body.description
      const notes = await noteModel.findOneAndUpdate({_id:id},{description:description})

      res.status(200).json({
            message:"note has been updated successfully"
      })
})

module.exports = app