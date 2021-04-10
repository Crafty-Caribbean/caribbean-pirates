const multiparty = require('multiparty');
// const axios = require('axios');
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const pathModule = require('path');
const patternsModels = require('../../db/models/patterns');
require('dotenv').config();

AWS.config.update({
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
});

const s3 = new AWS.S3();
// ========= S3 photo upload helper function =========
const uploadPhoto = async (path, name) => {
  const buffer = fs.readFileSync(path);
  const distinctName = `${name}-${pathModule.parse(path).name}`;
  const type = await fileType.fromBuffer(buffer);
  // add type validation here
  // allow only .tiff, .pjp, .jfif, .gif, .svg, .bmp, .png, .jpeg,
  // .svgz, .jpg, .webp, .ico, .xbm, .dib, .tif, .pjpeg, .avif
  const accepted = new Set(['.png', '.jpeg', '.jpg']);
  if (!accepted.has(type.ext)) {
    return null;
  }
  const params = {
    ACL: 'public-read',
    Body: buffer,
    Bucket: process.env.S3_BUCKET,
    ContentType: type.mime,
    Key: `${distinctName}.${type.ext}`,
  };
  return s3.upload(params).promise();
};

module.exports = {
  getOnePattern(req, res) {
    patternsModels.getOnePattern(req.params.pattern_id, (err, results) => {
      if (err) {
        res.status(404).send('Fail to get pattern data', err);
      }
      res.status(200).send(results.rows[0]);
    });
  },

  getAllPatterns(req, res) {
    let count = 50;
    let page = 0;
    if (req.query.count !== undefined) {
      count = req.query.count;
    }
    if (req.query.page !== undefined) {
      page = req.query.page;
    }
    const offset = count * page;
    patternsModels.getAllPatterns(count, offset, (err, results) => {
      if (err) {
        res.status(404).send('Fail to get patterns', err);
      }
      res.status(200).send(results.rows);
    });
  },

  deleteOnePattern(req, res) {
    patternsModels.deleteOnePattern(Number(req.params.pattern_id), (err) => {
      if (err) {
        console.error(err);
        res.status(401).send('Error deleting project');
      }
      res.status(201).send('Project deleted');
    });
  },

  addPattern(req, res) {
    patternsModels.addOnePattern(
      Number(req.body.user_id),
      req.body.title,
      req.body.craft_type,
      req.body.skill_level,
      req.body.price,
      req.body.description,
      req.body.images, (err) => {
        if (err) {
          console.error(err);
          res.status(401).send('Error adding pattern');
        }
        res.status(201).send('Pattern created');
      },
    );
  },

  photoUpload(req, res) {
    const form = new multiparty.Form();
    form.parse(req, async (error, fields, files) => {
      if (error) {
        return res.status(500).send(error);
      }
      const promises = [];
      if (files.file === undefined) {
        return res.status(500).send('No files sent');
      }
      for (let i = 0; i < files.file.length; i += 1) {
        try {
          const { path } = files.file[i];
          const fileName = `media/${Date.now().toString()}`;
          promises.push(uploadPhoto(path, fileName));
        } catch (err) {
          console.log(err);
          return res.status(500).send(err);
        }
      }
      return Promise.all(promises)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).send(err);
        });
    });
  },
};
