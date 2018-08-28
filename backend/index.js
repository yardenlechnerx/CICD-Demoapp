exports.handler = async (event) => {
    // TODO implement
    var mods = [
        "“You’re braver than you believe, and stronger than you seem, and smarter than you think.”",
        "“Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before.”",
        "“It always seems impossible until it is done.”",
        "“You always pass failure on the way to success.”"
    ];
    
    var msg = mods[Math.floor(Math.random()*mods.length)];
    
    return await {
        "statusCode": 200,
        "body": msg,
        "headers": {
            'Content-Type': 'text/plain; charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': "Content-Type"
        }
    };
};
