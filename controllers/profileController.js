import Profile from '../models/Profile.js';

//Create profile
export function createProfile (req, res){
    const newProfile = new Profile(req.body);
    try {
      const savedProfile =  newProfile.save();
      res.status(200).json(savedProfile);
    } catch (err) {
      res.status(500).json(err);
    }
}

//profile Details
export function profileDetails(req, res){
    try {
        const profile =  Profile.findById(req.params.id);
        res.status(200).json(profile);
      } catch (err) {
        res.status(500).json(err);
      }
}

//Delete profile
export function deleteProfile(req, res){
    const id = req.params.id;
    Profile.findByIdAndDelete(id)
      .then(result => {
        res.json({ profile: result });
      })
      .catch(err => {
        console.log(err);
      });
}
// UPDATE A profile
export function updateProfile(req, res){
    const id = req.params.id;
    const updatedProfile = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        academic_title: req.body.academic_title
    }
    Profile.findByIdAndUpdate(id, {$set: updatedProfile}).then(()=>{
        res.json({message:`Profile updated successfully`});
    }).catch(err=>{
        res.json({message: err})
    })
}