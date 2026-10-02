/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['255743140476'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Bute0XFF'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: ',',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUyZKjRhD9l7pKMUiAQFJERxixC6GNRptjDgUUS7OqqkCgCR39J/4z/4iD7unpOdjj9q3Wly/zvcxvoCgTgizUgfk3UOGkgRT1S9pVCMzBog5DhMEQBJBCMAe2ouiMqWv3rF6cDHe5TU+SQg8zQwgvxJvka41/XhwGrmzsnsBjCKrayxL/F4CttB902ljtII/YrlmMU9ldaHtn0eZ5ZsiQLQYvEIad65pP4NEjwgQnRaRWMcoRhpmFui1M8Ofod0sNruC0Nai2sBx3YLE75rwR97dK2eD8uLkrmI1Jbc7U9HP0g8mAcRptldNWU1U9c253BlfLzorV7qZrrKiNOHmqtPwzeaNPkqhAgRmggia0+3TdeeUm7Jq7oFMkdo1tuVF4v6RyuTsg7s7d9vtTfUURt1UP5HPEn8VFyRtkzVTlWY+ffY6ddudju7yOL7rNrjj7OTaZ6Hxr2uhn4lv87pX0/9R9ZBcv5YSfYmNPTxXv1xozer6Ha7ixbpA4dxor+72lmkoqfY7+ppNbx5gMDkePEJ3s4pM5wHRVV9eatwSdb/EmZrzj9eC4H/QhrfGvWFb4qnLyUldv3Rrph3SQZfWe87rY0yYn0Se2nb3c16cx5GpqNa22PE/YdRF5B3ubjxcbg8Tj4Dy4TNlgnaO8sTz22sTS02tGKerMAMzHjyHAKEoIxZAmZdGfCUMAg8ZBPkb0tbigiGecrEZBuiCVwOy3zYSX2oygYBcq0i5M1HazE0+zIz6nT2AIKlz6iBAUGAmhJe5sRAiMEAHz378OQYFa+iZbH4wbD0GYYELdoq6yEgbvmr5fQt8v64I6XeHL/QJhMB99HCNKkyIifRXrAmI/Thokx5ASMA9hRtCP/BBGAZhTXKMfPSuXQV921Zrwx63GgiHIX+VIAjAH7GQi8tyYH/GiMGeF38iXWw8Lq+pLgSgYggL2r8Fff/wJhiB7+zMSJ5wojKcjbiQIbP+tv3j8oNujB4jCJCNgDuSVtemanaGanMjMXF2XdpEkRxL4SO/dJW86HPFLTBKPUW2kQiOqZ266dlhWWnjCbrspzMDBMzY/l3Vxe/oHEDAHiWrYm1nNt6eptWw2RahHF7xxRDFbNUv+okLd7uTLVt7xvrItVeLFtdrZbiUpTp62vn6xXC90y/2L0mJ6y/Fht4TK7qmPFqAm8dHPwWJqX0xSXIsFvTvhRrqn+jlM09oRIu6yZAaraKpGbuQrknRaYsvn7fNCpHZwkbYWe+88L7/OHI9fvUTlfk+KlZ5fvXf/vvZP9n1uJa/e6oXrt2GCXsfAd4H+U8g34r3fRo/hTxjfB8u/NOficOV5z8yZVjFiPeZXzWGpuJRG0nGQKveqM9wrE1S5taqm4PH4OgRVBmlY4hzMAck9CIYAl3XvXrMIy19EkiXXVKPI7NPOIKHSR0c8JzkiFOYVmI/F2WgmiOOp8PgbzY2HHUUHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot',
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      antibotAction: 'warn', // 'warn' | 'kick'
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      antigroupstatus: false, // Block group status posts
      antigroupstatusAction: 'delete', // 'delete', 'kick'
      antisticker: false, // Stickers not allowed in group
      antistickerAction: 'delete', // 'delete', 'kick'
      antibadword: false, // Block bad words in group
      antibadwordAction: 'delete', // 'delete', 'kick', 'warn'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
