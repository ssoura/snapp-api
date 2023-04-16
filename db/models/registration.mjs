import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
});
const Registration = mongoose.model('Registration', registrationSchema);
export{
    Registration
}