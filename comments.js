// Create web server


// Import data
const data = require('../data/data.json');

// Import functions
const { getComments, addComment } = require('../data/comments');

// GET route for comments page
router.get('/comments', (req, res) => {
    res.render('comments', {
        pageTitle: 'Comments',
        pageID: 'comments',
        comments: getComments(),
        data,
    });
});

// POST route for comments page
router.post('/comments', [
    check('name')
        .exists()
        .withMessage('Name is required')
        .isLength({ min: 3, max: 50 })
        .withMessage('Name must be between 3 and 50 characters'),
    check('comment')
        .exists()
        .withMessage('Comment is required')
        .isLength({ min: 3, max: 500 })
        .withMessage('Comment must be between 3 and 500 characters')
], (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        addComment(req.body.name, req.body.comment);
        res.redirect('/comments');
    } else {
        res.render('comments', {
            pageTitle: 'Comments',
            pageID: 'comments',
            comments: getComments(),
            data,
            errors: errors.array()
        });
    }
});

module.exports = router;