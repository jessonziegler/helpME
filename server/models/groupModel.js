import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    group_url: { type: String, required: true },
    followers: [{ type: String }]
  },
  {
    timestamps: true,
  }
);

const Group = mongoose.model('Group', groupSchema);
export default Group;