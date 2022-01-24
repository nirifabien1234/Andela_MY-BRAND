import Contact from '../models/Contact.js';

//Create contact
export function createMessage (req, res) {
    const newMessage = new Contact(req.body);
    
       newMessage.save().then((result) => {
         res.json(result)
        }).catch((err)=>{
      res.json({newMessage: err})
        })
}

//All Messages
export function allMessages(req, res){
    try {
        const messages =  Contact.find();
        res.status(200).json(messages);
      } catch (err) {
        res.status(500).json(err);
      }
}

//Message Details
export function messageDetails(req, res){
    try {
        const message =  Contact.findById(req.params.id);
        res.status(200).json(message);
      } catch (err) {
        res.status(500).json(err);
      }
}

//Delete Message
export function deleteMessage(req, res){
    try {
        const message =  Contact.findById(req.params.id);
        if (message) {
          try {
             message.delete();
            res.status(200).json("Message has been deleted...");
          } catch (err) {
            res.status(500).json(err);
          }
        } else {
          res.status(401).json("The message you are trying to delete is not exist!");
        }
      } catch (err) {
        res.status(500).json(err);
      }
}
