/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');



if (Config.WORKTYPE == 'private') {

    Amdi.applyCMD({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC,  deleteCommand: false}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "πΈπ Hey There! I'm Online. π\n\n*Developer:* Black Amda\n*Customize By :*Nico\n\n*Black Amda's WhatsApp Number :*\n wa.me/94757405652\n\n*Nico's WhatsApp Number :*\n wa.me/94784621232\n\n\n*AN Tech YouTube channel :\nhttps://www.youtube.com/channel/UCZx8U1EU95-Wn9mH4dn15vQ\n\n*SL Technical Tips YouTube Channel :\nhttps://www.youtube.com/SLTechnicalTips\n\nThank You For Using Queen Amdi By Nicoπ"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Copyright Β© 2021 | Queen Amdi*' })
     }
    }));

    Amdi.applyCMD({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Amdi.applyCMD({pattern: 'version', fromMe: true, desc: Lang.BOT_V,  deleteCommand: false}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*π§¬ Queen Amdi Version π§¬*\n\n` + 
                '```Installed version :```\n' +
                Lang.version + 
                `\n\nCheck official website : https://www.amdaniwasa.com/`
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Amdi.applyCMD({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "πΈπ Hey There! I'm Online. π\n\n*Developer:* Black Amda\n*Customize By :*Nico\n\n*Black Amda's WhatsApp Number :*\n wa.me/94757405652\n\n*Nico's WhatsApp Number :*\n wa.me/94784621232\n\n\n*AN Tech YouTube channel :\nhttps://www.youtube.com/channel/UCZx8U1EU95-Wn9mH4dn15vQ\n\n*SL Technical Tips YouTube Channel :\nhttps://www.youtube.com/SLTechnicalTips\n\nThank You For Using Queen Amdi By Nicoπ"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Copyright Β© 2021 | Queen Amdi*' })
     }
    }));

    Amdi.applyCMD({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Amdi.applyCMD({pattern: 'version', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*π§¬ Queen Amdi Version π§¬*\n\n` + 
                '```Installed version :```\n' +
                Lang.version + 
                `\n\nCheck official website : https://www.amdaniwasa.com/`
           , MessageType.text);
            
        }));
}
