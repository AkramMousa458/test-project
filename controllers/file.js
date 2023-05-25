import picModel from '../models/fileuploads.js'



export const file = async (req, res) => {
    try {
      const data = await picModel
      .find({});
      if (data.length > 0) {
        res.render('upload/uploa', { data: data });
      } else {
        res.render('upload/uploa', { data: {} });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send('InternalServer Error1');
    }
  };

