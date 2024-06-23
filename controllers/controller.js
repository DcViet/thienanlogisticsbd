// const models = require('../models');

// const controller = {};


// controller.showBlogs = async (req, res) => {
//     const limit = 5;

        
//         const recentBlogs = await models.Blog.findAll({
//             attributes: ['id', 'title', 'imagePath', 'summary', 'description'],
//             order: [['categoryId', 'DESC']],
//             limit: limit,
//             include: [
//                 {
//                     model: models.BlogCategory,
//                     attributes: ['name'],
//                 },
//             ],
//         });

//         const totalCount = await models.Blog.count();

       
//         const blogsWithCategory = recentBlogs.map(blog => ({
//             id: blog.id,
//             title: blog.title,
//             imagePath: blog.imagePath,
//             summary: blog.summary,
//             description: blog.description,
//             categoryName: blog.BlogCategory.name,
//         }));

//         res.locals.recentBlogs = blogsWithCategory;
//         res.locals.totalCount = totalCount;

//         res.render("list");
// };


// controller.showBlogDetails = async (req, res) => {
//     const blogId = req.params.id;

        
//         const blogDetails = await models.Blog.findOne({
//             where: { id: blogId },
//             attributes: ['title', 'imagePath', 'summary', 'description'],
//             include: [
//                 {
//                     model: models.BlogCategory,
//                     attributes: ['name'],
//                 },
//                 {
//                     model: models.BlogComment,
//                     attributes: ['author', 'avatar', 'createdAt', 'message'],
//                     order: [['createdAt', 'ASC']],
//                 },
//             ],
//         });

//         if (!blogDetails) {
//             return res.status(404).send('Blog not found');
//         }

        
//         const totalComments = await models.BlogComment.count({
//             where: { blogId: blogId },
//         });

//         const comments = blogDetails.BlogComments.map(comment => ({
//             author: comment.author,
//             avatar: comment.avatar,
//             createdAt: comment.createdAt,
//             message: comment.message,
//         }));

        
//         const blogData = {
//             title: blogDetails.title,
//             imagePath: blogDetails.imagePath,
//             summary: blogDetails.summary,
//             description: blogDetails.description,
//             categoryName: blogDetails.BlogCategory.name,
//             comments: comments,
//             totalComments: totalComments,
//         };

//         res.locals.blogData = blogData;

    
//         res.render("details");
// };



// const { BlogComment } = require('../models');

// controller.postComment = async (req, res) => {
//     try {
//         let { name, email, message } = req.body;
//         const blogId = req.params.id; 

    
//         await BlogComment.create({
//             author: name,
//             email: email,
//             message: message,
//             blogId: blogId, 
//             avatar: "/img/0.jpg", 
//         });

        
//         res.redirect(`/${blogId}`);
//     } catch (error) {
//         console.error(error);
        
//         res.redirect('/');
//     }
// };


// module.exports = controller;
