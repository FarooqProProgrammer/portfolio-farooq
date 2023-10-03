function generateRandomId(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
  
    return randomId;
  }

export const Links = [
    {
        id:1,
        Text:'Home',
        path:'/'
    },
    {
        id:2,
        Text:'About',
        path:'/about'
    },
    {
        id:3,
        Text:'portfolio',
        path:'/portfolio'
    },
    {
        id:4,
        Text:'clients',
        path:'/clients'
    },
    {
        id:5,
        Text:'Blogs',
        path:'/blogs'
    },
    
]

export const portfolioData = [
    {
        id:generateRandomId(),
        Name:'React JS 01',
        category:'React Js',
        img:'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:generateRandomId(),
        Name:'React JS 02',
        category:'React Js',
        img:'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:generateRandomId(),
        Name:'Vue Js 01',
        category:'Vue Js',
        img:'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:generateRandomId(),
        Name:'HTML',
        category:'HTML',
        img:'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
]