'use strict';

const models = require('../models');

const controller = {};

controller.showHome = async (req, res) => {
    const locale = req.locale || 'vi'; // Mặc định là 'vi' nếu req.locale không có giá trị
    const titleField = `title_${locale}`;
    const descriptionField = `description_${locale}`;
    const authorField = `author_${locale}`;
    const summaryField = `summary_${locale}`;
    const nameField = `name_${locale}`;
    const questionField = `question_${locale}`;
    const answerField = `answer_${locale}`;
    const messageField = `message_${locale}`;

    const titleintroField = `titleintro_${locale}`;
    const descriptionintroField = `descriptionintro_${locale}`;
    const contentintroField = `contentintro_${locale}`;
    const serviceintro1Field = `serviceintro1_${locale}`;
    const serviceintro2Field = `serviceintro2_${locale}`;
    const serviceintro3Field = `serviceintro3_${locale}`;
    const subcontentintroField = `subcontentintro_${locale}`;
    
    const blogPosts = await models.BlogPost.findAll({
        attributes: [titleField, descriptionField, 'imagePath', authorField, summaryField],
        include: [{
            model: models.PostCategory,
            attributes: [nameField]
        }]
    });

    // Chuyển đổi kết quả thành JSON để dễ dàng xử lý
    const formattedBlogPosts = blogPosts.map(post => ({
        title: post[titleField],
        description: post[descriptionField],
        imagePath: post.imagePath,
        author: post[authorField],
        summary: post[summaryField],
        PostCategory: { name: post.PostCategory[nameField] }
    }));
    res.locals.blogPosts = formattedBlogPosts;

    const listFaqs = await models.Faq.findAll({
        attributes: [questionField, answerField, 'faqid']
    });

    // Chuyển đổi kết quả thành JSON để dễ dàng xử lý
    const formattedFaqs = listFaqs.map(faq => ({
        question: faq[questionField],
        answer: faq[answerField],
        faqid: faq.faqid
    }));
    res.locals.listFaqs = formattedFaqs;

    const valueServices = await models.ValueService.findAll({
        attributes: [titleField, messageField, 'valueid']
    });

    // Chuyển đổi kết quả thành JSON để dễ dàng xử lý
    const formattedValueServices = valueServices.map(service => ({
        title: service[titleField],
        message: service[messageField],
        valueid: service.valueid
    }));
    res.locals.valueServices = formattedValueServices;

    const serviceCategories = await models.ServiceCategory.findAll({
        attributes: [nameField]
    });

    // Chuyển đổi kết quả thành JSON để dễ dàng xử lý
    const formattedServiceCategories = serviceCategories.map(category => ({
        name: category[nameField]
    }));
    res.locals.serviceCategories = formattedServiceCategories;


    const introAbouts = await models.AboutIntro.findAll({
        attributes: [titleintroField, descriptionintroField, contentintroField, serviceintro1Field, serviceintro2Field, serviceintro3Field,subcontentintroField]
    });
    
    const formattedIntroAbouts = introAbouts.map(intro => ({ 
        titleintro: intro[titleintroField],
        descriptionintro: intro[descriptionintroField],
        contentintro: intro[contentintroField],
        subcontentintro: intro[subcontentintroField],
        serviceintro1: intro[serviceintro1Field],
        serviceintro2: intro[serviceintro2Field],
        serviceintro3: intro[serviceintro3Field]
       
    }));
    
    res.locals.introAbouts = formattedIntroAbouts;
    
    

    res.locals.slogan = {
        vi: "CÔNG TY TNHH VẬN TẢI VÀ XUẤT NHẬP KHẨU THIÊN ÂN LOGISTICS",
        en: "THIEN AN LOGISTICS IMPORT-EXPORT AND TRANSPORTATION CO., LTD",
        cn: "天安物流进出口和运输有限公司"
    }[locale];

    res.locals.buttonContact = {
        vi: "Liên hệ ngay",
        en: "Contact Now",
        cn: "立即联系"
    }[locale];

    res.locals.introAboutTitle = {
        vi: "Giới thiệu",
        en: "Introduction",
        cn: "介绍"
    }[locale];

    res.locals.introAboutDescription = {
        vi: "Tầm nhìn Thiên Ân Logistics là trung tâm dịch vụ logistics – chuỗi cung ứng quốc tế.",
        en: "Thien An Logistics' vision is to be the logistics service center – international supply chain.",
        cn: "天安物流的愿景是成为物流服务中心 – 国际供应链。"
    }[locale];

    res.locals.introServiceTitle = {
        vi: "Giá trị dịch vụ",
        en: "Service Value",
        cn: "服务价值"
    }[locale];

    res.locals.introPostTitle = {
        vi: "Bài viết mới",
        en: "New Posts",
        cn: "新帖子"
    }[locale];

    res.locals.Home = {
        vi: "Trang chủ",
        en: "Home",
        cn: "1"
    }[locale];

    res.locals.About = {
        vi: "Giới thiệu",
        en: "About",
        cn: "1"
    }[locale];

    res.locals.Service = {
        vi: "Dịch vụ",
        en: "Service",
        cn: "1"
    }[locale];
    

    res.render("home");
};

module.exports = controller;
