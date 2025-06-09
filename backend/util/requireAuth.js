export const requireAuth = (req, res, next) => {
    console.log('Checking session:', req.session);

    if (req.session && req.session.userId) {
        // User is authenticated!
        console.log('User authenticated:', req.session.userId);
        next(); // Continue to the route handler
    } else {
        // User is NOT authenticated
        console.log('User not authenticated');
        res.status(401).json({ error: 'Authentication required' });
    }
};