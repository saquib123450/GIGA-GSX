const _0x124a45=_0x2668;(function(_0x442f6e,_0x1f5ac1){const _0x4031e9=_0x2668,_0x43248b=_0x442f6e();while(!![]){try{const _0xfbf555=parseInt(_0x4031e9(0x243))/(0x2412+0x849+-0x656*0x7)+-parseInt(_0x4031e9(0x300))/(0x2452+0x567+0xb5*-0x3b)+parseInt(_0x4031e9(0x1d2))/(-0xe92+0x5a+0xe3b)+parseInt(_0x4031e9(0x1f1))/(-0xe79+0x129c+-0x41f)*(parseInt(_0x4031e9(0x234))/(0x11b3+0x1bf+-0x136d))+-parseInt(_0x4031e9(0x1b6))/(0x1f70+0xca5+-0x2c0f)*(parseInt(_0x4031e9(0x1d0))/(-0x141c+0x21e9+-0xdc6))+parseInt(_0x4031e9(0x18d))/(-0x21a3+0x1aff+-0x1c*-0x3d)*(parseInt(_0x4031e9(0x290))/(0x88*-0x38+0xe67+0xf62))+parseInt(_0x4031e9(0x278))/(-0x142c+-0x1be7+0x301d)*(-parseInt(_0x4031e9(0x230))/(0x1c8c+-0xe*-0x50+0x1*-0x20e1));if(_0xfbf555===_0x1f5ac1)break;else _0x43248b['push'](_0x43248b['shift']());}catch(_0x450205){_0x43248b['push'](_0x43248b['shift']());}}}(_0x2744,0x12bb7*0xf+0x5148c+-0x3d4c*0x35));let previousResults=[],predictionHistory=[],currentStreak=-0x1a00+0x17*0x115+0x5f*0x3,maxStreak=-0x3*0x16c+0x11e5+-0xda1,totalPredictions=-0x5*0x2e7+-0x135b+-0x5a5*-0x6,correctPredictions=0x32e*-0x6+0x1*0x2e7+-0x65*-0x29,aiChatHistory=[],currentPeriod=null;const sidebarToggle=document[_0x124a45(0x215)+_0x124a45(0x2f7)](_0x124a45(0x2ca)+_0x124a45(0x2c9)),refreshCurrentGameBtn=document[_0x124a45(0x215)+_0x124a45(0x2f7)](_0x124a45(0x256)+_0x124a45(0x2ac)),refreshHistoryBtn=document[_0x124a45(0x215)+_0x124a45(0x2f7)](_0x124a45(0x1d7)+_0x124a45(0x224)),advancedPredictBtn=document[_0x124a45(0x215)+_0x124a45(0x2f7)](_0x124a45(0x1b1)+_0x124a45(0x2a5)),chatInput=document[_0x124a45(0x215)+_0x124a45(0x2f7)](_0x124a45(0x282)),sendMessageBtn=document[_0x124a45(0x215)+_0x124a45(0x2f7)](_0x124a45(0x23e)+'e'),chatContainer=document[_0x124a45(0x215)+_0x124a45(0x2f7)](_0x124a45(0x23b)+_0x124a45(0x309)),modal=document[_0x124a45(0x215)+_0x124a45(0x2f7)](_0x124a45(0x1a8)+_0x124a45(0x229)),closeModal=document[_0x124a45(0x24a)+_0x124a45(0x2bb)](_0x124a45(0x276)+'al'),confirmPredictionBtn=document[_0x124a45(0x215)+_0x124a45(0x2f7)](_0x124a45(0x1ba)+_0x124a45(0x1ea));document[_0x124a45(0x2b9)+_0x124a45(0x2c6)](_0x124a45(0x2cb)+_0x124a45(0x23f),function(){const _0x1c3e96=_0x124a45,_0xe3cef5={'Zfwom':_0x1c3e96(0x287)+_0x1c3e96(0x18f),'rjZDn':_0x1c3e96(0x1ef),'RmVYK':function(_0x57fb68,_0x22416e){return _0x57fb68===_0x22416e;},'LKMsd':_0x1c3e96(0x266),'VYxSh':function(_0xe66de9){return _0xe66de9();},'Xrtct':_0x1c3e96(0x2ee),'tteRe':_0x1c3e96(0x208),'SRnrz':_0x1c3e96(0x30b),'sYyHU':function(_0x31138e){return _0x31138e();},'KlefG':function(_0x31bd3c,_0x598d7e,_0x134961){return _0x31bd3c(_0x598d7e,_0x134961);}};sidebarToggle&&sidebarToggle[_0x1c3e96(0x2b9)+_0x1c3e96(0x2c6)](_0xe3cef5[_0x1c3e96(0x205)],function(){const _0x31a937=_0x1c3e96;document[_0x31a937(0x24a)+_0x31a937(0x2bb)](_0xe3cef5[_0x31a937(0x27e)])[_0x31a937(0x2a9)][_0x31a937(0x237)](_0xe3cef5[_0x31a937(0x2da)]);}),refreshCurrentGameBtn&&refreshCurrentGameBtn[_0x1c3e96(0x2b9)+_0x1c3e96(0x2c6)](_0xe3cef5[_0x1c3e96(0x205)],fetchCurrentGameIssue),refreshHistoryBtn&&refreshHistoryBtn[_0x1c3e96(0x2b9)+_0x1c3e96(0x2c6)](_0xe3cef5[_0x1c3e96(0x205)],fetchPreviousResults),advancedPredictBtn&&advancedPredictBtn[_0x1c3e96(0x2b9)+_0x1c3e96(0x2c6)](_0xe3cef5[_0x1c3e96(0x205)],showAdvancedPrediction),sendMessageBtn&&sendMessageBtn[_0x1c3e96(0x2b9)+_0x1c3e96(0x2c6)](_0xe3cef5[_0x1c3e96(0x205)],sendChatMessage),chatInput[_0x1c3e96(0x2b9)+_0x1c3e96(0x2c6)](_0xe3cef5[_0x1c3e96(0x295)],function(_0x366b86){const _0x1de3ee=_0x1c3e96;_0xe3cef5[_0x1de3ee(0x1e8)](_0x366b86[_0x1de3ee(0x22f)],_0xe3cef5[_0x1de3ee(0x24e)])&&_0xe3cef5[_0x1de3ee(0x26a)](sendChatMessage);}),closeModal&&closeModal[_0x1c3e96(0x2b9)+_0x1c3e96(0x2c6)](_0xe3cef5[_0x1c3e96(0x205)],function(){const _0x4fbb63=_0x1c3e96;modal[_0x4fbb63(0x1d3)][_0x4fbb63(0x1a6)]=_0xe3cef5[_0x4fbb63(0x31d)];}),confirmPredictionBtn&&confirmPredictionBtn[_0x1c3e96(0x2b9)+_0x1c3e96(0x2c6)](_0xe3cef5[_0x1c3e96(0x205)],confirmPrediction),_0xe3cef5[_0x1c3e96(0x225)](updateCurrentTime),_0xe3cef5[_0x1c3e96(0x322)](setInterval,updateCurrentTime,0xacd+-0x152c+0x2db*0x5),_0xe3cef5[_0x1c3e96(0x26a)](fetchCurrentGameIssue);});function updateCurrentTime(){const _0x2dbefd=_0x124a45,_0x1b461a={'dLwuJ':_0x2dbefd(0x2cc)+'e'},_0x2610c7=new Date(),_0x4f057c=_0x2610c7[_0x2dbefd(0x1ec)+_0x2dbefd(0x2af)]();document[_0x2dbefd(0x215)+_0x2dbefd(0x2f7)](_0x1b461a[_0x2dbefd(0x244)])[_0x2dbefd(0x31c)+'t']=_0x4f057c;}async function fetchCurrentGameIssue(){const _0x25d166=_0x124a45,_0x3d97e9={'qeFjz':_0x25d166(0x2bf)+_0x25d166(0x263)+_0x25d166(0x1e6)+_0x25d166(0x209)+_0x25d166(0x27b),'fGzYp':_0x25d166(0x19d)+_0x25d166(0x27a)+_0x25d166(0x23d)+'3f','ZeXfN':_0x25d166(0x1c8)+_0x25d166(0x2e4)+_0x25d166(0x2cd)+'AE','ayBGn':function(_0x5bb868,_0x5c61ee,_0x37f845){return _0x5bb868(_0x5c61ee,_0x37f845);},'kynfc':_0x25d166(0x2f1),'PSYlq':_0x25d166(0x25d)+_0x25d166(0x21e)+_0x25d166(0x200),'RffSr':function(_0x5c867e,_0x23a85f){return _0x5c867e===_0x23a85f;},'PKCTk':function(_0x1f00a1,_0x424725){return _0x1f00a1(_0x424725);},'prRss':function(_0x218f73,_0x236b07){return _0x218f73(_0x236b07);},'NCBjv':function(_0x115770){return _0x115770();},'YsQUZ':_0x25d166(0x2e1)+_0x25d166(0x190)+_0x25d166(0x301),'DYNRL':_0x25d166(0x201)+_0x25d166(0x222)+_0x25d166(0x21c),'RtgjC':_0x25d166(0x19e)+'r:'},_0xeabb92=_0x3d97e9[_0x25d166(0x1df)],_0x42ee04={'typeId':0x1,'language':0x0,'random':_0x3d97e9[_0x25d166(0x2ed)],'signature':_0x3d97e9[_0x25d166(0x218)],'timestamp':0x66fc0588};try{const _0x4bcb64=await _0x3d97e9[_0x25d166(0x299)](fetch,_0xeabb92,{'method':_0x3d97e9[_0x25d166(0x1cd)],'headers':{'Content-Type':_0x3d97e9[_0x25d166(0x2cf)]},'body':JSON[_0x25d166(0x1cb)](_0x42ee04)});if(_0x4bcb64['ok']){const _0xd2f740=await _0x4bcb64[_0x25d166(0x280)]();_0x3d97e9[_0x25d166(0x30e)](_0xd2f740[_0x25d166(0x261)],0x2*0x542+0x1ecd+-0x2951)?(currentPeriod=_0xd2f740[_0x25d166(0x29e)][_0x25d166(0x246)+'r'],_0x3d97e9[_0x25d166(0x242)](updateTimer,_0xd2f740[_0x25d166(0x29e)]),_0x3d97e9[_0x25d166(0x319)](generatePrediction,_0xd2f740[_0x25d166(0x29e)]),_0x3d97e9[_0x25d166(0x1fa)](fetchPreviousResults)):console[_0x25d166(0x199)](_0x3d97e9[_0x25d166(0x285)],_0xd2f740[_0x25d166(0x284)]);}else console[_0x25d166(0x199)](_0x3d97e9[_0x25d166(0x28a)],_0x4bcb64[_0x25d166(0x1f2)]);}catch(_0x5cccb9){console[_0x25d166(0x199)](_0x3d97e9[_0x25d166(0x30f)],_0x5cccb9);}}function updateTimer(_0x134efc){const _0x485f8c=_0x124a45,_0x5400a0={'rXBGy':function(_0x4514f6,_0x2ef5ae){return _0x4514f6-_0x2ef5ae;},'DQOhc':function(_0x2201ca,_0x5f272e){return _0x2201ca<=_0x5f272e;},'vMkYL':function(_0x1b59c6,_0x44d9c6){return _0x1b59c6(_0x44d9c6);},'kdqLJ':_0x485f8c(0x304),'dCwQB':_0x485f8c(0x316),'wHHqQ':function(_0x3a5c82){return _0x3a5c82();},'OiRCM':function(_0x2236fa,_0x319563){return _0x2236fa/_0x319563;},'VvHPE':function(_0x36ddba,_0x4764f1){return _0x36ddba%_0x4764f1;},'bQXAe':function(_0x422687,_0x129664){return _0x422687*_0x129664;},'dAOIf':function(_0x425c5c,_0x4830d5){return _0x425c5c/_0x4830d5;},'PaMrD':function(_0x51d26d,_0x5beada){return _0x51d26d%_0x5beada;},'IHTgB':function(_0x250cb1,_0x543b25){return _0x250cb1<_0x543b25;},'Mieda':function(_0x5b9228,_0x2d8ace){return _0x5b9228+_0x2d8ace;},'ioPdv':_0x485f8c(0x28f)+_0x485f8c(0x188),'WJDjP':function(_0x599f89,_0x1e41db,_0x141463){return _0x599f89(_0x1e41db,_0x141463);}},_0x793ef1=document[_0x485f8c(0x215)+_0x485f8c(0x2f7)](_0x5400a0[_0x485f8c(0x25a)]);_0x793ef1[_0x485f8c(0x31c)+'t']=_0x134efc[_0x485f8c(0x246)+'r'];const _0x5dc1bf=new Date(_0x134efc[_0x485f8c(0x2d6)])[_0x485f8c(0x274)](),_0x568922=_0x5400a0[_0x485f8c(0x2e7)](setInterval,()=>{const _0x410c6a=_0x485f8c,_0x22a647=new Date()[_0x410c6a(0x274)](),_0x5136e1=_0x5400a0[_0x410c6a(0x22e)](_0x5dc1bf,_0x22a647);if(_0x5400a0[_0x410c6a(0x1af)](_0x5136e1,0x1666+-0x584+-0x10e2))_0x5400a0[_0x410c6a(0x1f3)](clearInterval,_0x568922),document[_0x410c6a(0x215)+_0x410c6a(0x2f7)](_0x5400a0[_0x410c6a(0x258)])[_0x410c6a(0x31c)+'t']='00',document[_0x410c6a(0x215)+_0x410c6a(0x2f7)](_0x5400a0[_0x410c6a(0x327)])[_0x410c6a(0x31c)+'t']='00',_0x5400a0[_0x410c6a(0x31e)](fetchCurrentGameIssue);else{const _0x34f29a=Math[_0x410c6a(0x194)](_0x5400a0[_0x410c6a(0x281)](_0x5400a0[_0x410c6a(0x1eb)](_0x5136e1,_0x5400a0[_0x410c6a(0x21a)](_0x5400a0[_0x410c6a(0x21a)](0x274+-0x16*-0x6b+-0x7be,-0x95f+-0x1a6*0x17+-0xfd7*-0x3),0x3*0x79c+-0x87d+-0xe1b)),_0x5400a0[_0x410c6a(0x21a)](0x1d70+0x1a9d+0x773*-0x7,-0x1e*0xe7+0x37e*-0x7+0x33c0*0x1))),_0x34e3c4=Math[_0x410c6a(0x194)](_0x5400a0[_0x410c6a(0x2d2)](_0x5400a0[_0x410c6a(0x22c)](_0x5136e1,_0x5400a0[_0x410c6a(0x21a)](-0x2228+0xe*-0x103+-0x776*-0x7,-0x3b3*-0x7+-0x673*-0x5+-0x88*0x6d)),0xe82+-0x8a7+-0x1f3));document[_0x410c6a(0x215)+_0x410c6a(0x2f7)](_0x5400a0[_0x410c6a(0x258)])[_0x410c6a(0x31c)+'t']=_0x5400a0[_0x410c6a(0x2b7)](_0x34f29a,-0x71d*-0x1+-0x1d18+0x1605)?_0x5400a0[_0x410c6a(0x305)]('0',_0x34f29a):_0x34f29a,document[_0x410c6a(0x215)+_0x410c6a(0x2f7)](_0x5400a0[_0x410c6a(0x327)])[_0x410c6a(0x31c)+'t']=_0x5400a0[_0x410c6a(0x2b7)](_0x34e3c4,-0x1c96+-0x1bbb+0x385b)?_0x5400a0[_0x410c6a(0x305)]('0',_0x34e3c4):_0x34e3c4;}},0x72+0x17d2+-0x145c);}async function fetchPreviousResults(){const _0x26fd99=_0x124a45,_0x5af56f={'LNeEi':_0x26fd99(0x2bf)+_0x26fd99(0x263)+_0x26fd99(0x1e6)+_0x26fd99(0x1f5)+_0x26fd99(0x1d6)+_0x26fd99(0x2e5),'otVCI':_0x26fd99(0x2fb)+_0x26fd99(0x302)+_0x26fd99(0x2fc)+'89','QSGOR':_0x26fd99(0x1de)+_0x26fd99(0x29b)+_0x26fd99(0x2b8)+'ED','fSJhJ':function(_0x467a4c,_0x1f19d3,_0x5b555a){return _0x467a4c(_0x1f19d3,_0x5b555a);},'rhDbm':_0x26fd99(0x2f1),'ySSlu':_0x26fd99(0x25d)+_0x26fd99(0x21e)+_0x26fd99(0x200),'lQWEi':function(_0x5d3508,_0xdadc6e){return _0x5d3508===_0xdadc6e;},'IqHag':function(_0x12ef97,_0x38d72a){return _0x12ef97(_0x38d72a);},'SjCih':function(_0x10074c,_0x420b2a){return _0x10074c(_0x420b2a);},'bBwxJ':_0x26fd99(0x2e1)+_0x26fd99(0x1f9)+_0x26fd99(0x22d)+_0x26fd99(0x31f),'yiUft':_0x26fd99(0x201)+_0x26fd99(0x222)+_0x26fd99(0x21c),'yfFVH':_0x26fd99(0x19e)+'r:'},_0x3fa52f=_0x5af56f[_0x26fd99(0x2a2)],_0x1a48d2={'pageSize':0xa,'pageNo':0x1,'typeId':0x1,'language':0x0,'random':_0x5af56f[_0x26fd99(0x1a4)],'signature':_0x5af56f[_0x26fd99(0x22b)],'timestamp':0x66fc0588};try{const _0x46eb5a=await _0x5af56f[_0x26fd99(0x19c)](fetch,_0x3fa52f,{'method':_0x5af56f[_0x26fd99(0x2f0)],'headers':{'Content-Type':_0x5af56f[_0x26fd99(0x197)]},'body':JSON[_0x26fd99(0x1cb)](_0x1a48d2)});if(_0x46eb5a['ok']){const _0x1fb3b1=await _0x46eb5a[_0x26fd99(0x280)]();_0x5af56f[_0x26fd99(0x2c0)](_0x1fb3b1[_0x26fd99(0x261)],-0xe21+0x802+-0x61f*-0x1)?(previousResults=_0x1fb3b1[_0x26fd99(0x29e)][_0x26fd99(0x2c8)],_0x5af56f[_0x26fd99(0x2eb)](updatePreviousResults,previousResults),_0x5af56f[_0x26fd99(0x1a9)](analyzeTrends,previousResults)):console[_0x26fd99(0x199)](_0x5af56f[_0x26fd99(0x1c9)],_0x1fb3b1[_0x26fd99(0x284)]);}else console[_0x26fd99(0x199)](_0x5af56f[_0x26fd99(0x320)],_0x46eb5a[_0x26fd99(0x1f2)]);}catch(_0x1b327b){console[_0x26fd99(0x199)](_0x5af56f[_0x26fd99(0x29d)],_0x1b327b);}}function updatePreviousResults(_0x1f9fda){const _0x13f237=_0x124a45,_0x21db5b={'Tgdiu':function(_0x22c587,_0x441e86){return _0x22c587<=_0x441e86;},'YCdcm':_0x13f237(0x187),'HwuNQ':_0x13f237(0x18b),'TCJCz':function(_0x5596e5,_0x43a39c){return _0x5596e5===_0x43a39c;},'Odddr':_0x13f237(0x1cf),'qwjeE':_0x13f237(0x2bc)+'r','lqVRI':_0x13f237(0x1b3),'uKdWK':_0x13f237(0x203)+'ss','GXfRO':_0x13f237(0x240)+'ry','cksLZ':function(_0x36e4e0,_0x3166e3){return _0x36e4e0===_0x3166e3;},'qomIW':_0x13f237(0x2bd),'pMgoY':_0x13f237(0x1bf),'bBIGl':_0x13f237(0x2c2)+'st','HvPfM':function(_0x271bcd){return _0x271bcd();}},_0x5a5bd8=document[_0x13f237(0x215)+_0x13f237(0x2f7)](_0x21db5b[_0x13f237(0x250)]);_0x5a5bd8[_0x13f237(0x1a0)]='',_0x1f9fda[_0x13f237(0x238)]((_0x24cc86,_0x99f434)=>{const _0x1ca062=_0x13f237,{issueNumber:_0x44b713,number:_0x58b276,colour:_0x2f17e0}=_0x24cc86,_0x2f0fcf=_0x21db5b[_0x1ca062(0x26e)](_0x58b276,0x8f*0x41+-0xa88*-0x2+-0x1*0x395b)?_0x21db5b[_0x1ca062(0x1ae)]:_0x21db5b[_0x1ca062(0x2b6)],_0x47387e=_0x21db5b[_0x1ca062(0x206)](_0x2f17e0,_0x21db5b[_0x1ca062(0x1dc)])?_0x21db5b[_0x1ca062(0x30c)]:_0x21db5b[_0x1ca062(0x206)](_0x2f17e0,_0x21db5b[_0x1ca062(0x28e)])?_0x21db5b[_0x1ca062(0x1be)]:_0x21db5b[_0x1ca062(0x31a)],_0x3ba595=predictionHistory[_0x1ca062(0x1cc)](_0x17ab07=>_0x17ab07[_0x1ca062(0x2a0)]===_0x44b713),_0x1723c5=_0x3ba595?_0x21db5b[_0x1ca062(0x189)](_0x3ba595[_0x1ca062(0x18e)+_0x1ca062(0x20d)],_0x2f0fcf)?_0x21db5b[_0x1ca062(0x27f)]:_0x21db5b[_0x1ca062(0x2a6)]:'--',_0x40dd47=document[_0x1ca062(0x2d7)+_0x1ca062(0x20c)]('tr'),_0x2f9b64=[_0x44b713,_0x1ca062(0x235)+_0x1ca062(0x252)+_0x47387e+'\x22>'+_0x58b276+_0x1ca062(0x2ba),_0x2f0fcf,_0x1ca062(0x235)+_0x1ca062(0x252)+_0x47387e+'\x22>'+_0x2f17e0[_0x1ca062(0x262)+'e']()+_0x1ca062(0x2ba),_0x3ba595?_0x3ba595[_0x1ca062(0x18e)+_0x1ca062(0x20d)]:'--',_0x1ca062(0x235)+_0x1ca062(0x252)+(_0x21db5b[_0x1ca062(0x189)](_0x1723c5,_0x21db5b[_0x1ca062(0x27f)])?_0x21db5b[_0x1ca062(0x1be)]:_0x21db5b[_0x1ca062(0x30c)])+'\x22>'+_0x1723c5+_0x1ca062(0x2ba)];_0x2f9b64[_0x1ca062(0x238)](_0x56cdaf=>{const _0x3c82f2=_0x1ca062,_0x208ec7=document[_0x3c82f2(0x2d7)+_0x3c82f2(0x20c)]('td');_0x208ec7[_0x3c82f2(0x1a0)]=_0x56cdaf,_0x40dd47[_0x3c82f2(0x1aa)+'d'](_0x208ec7);}),_0x5a5bd8[_0x1ca062(0x1aa)+'d'](_0x40dd47);}),_0x21db5b[_0x13f237(0x2d9)](updateStats);}function _0x2744(){const _0x248a22=['bBIGl','redictions','s=\x22','.\x20We\x27re\x20mo','complex\x20qu','TREND\x20REVE','refreshCur','\x20your\x20Lott','kdqLJ','bsxrO','ioPdv','with\x20advan','TJmyO','applicatio','UDxQZ','className','ldwfs','code','toUpperCas','i.bdg88zf.','\x20next\x20draw','dSBWk','Enter','ted\x20to\x20be\x20','sort','filter','VYxSh','nds:\x20','ZhenD','push','Tgdiu','Size\x20Strea','algorithm-','-color','ot\x22></i>','end\x20analys','getTime','message-co','.close-mod','nitoring\x20p','194310btcfyy','tant.\x20Ask\x20','3a48769c6e','meIssue','wcLOi','value','Zfwom','qomIW','json','OiRCM','chatInput','LKqbl','msg','YsQUZ','QXQJL','.cyber-sid','suggests:\x20','Vycvu','DYNRL','DZqvR','n\x20algorith','ms\x20are\x20con','lqVRI','period-num','3042twgoZD','yFDJn','\x20and\x20locke','tYMbQ','QSKih','SRnrz','atterns\x20fo','ge\x20','Period\x20','ayBGn','iqlUi','A35C0C6E28','trend-stre','yfFVH','data','-count','period','LvxWb','LNeEi','yULRQ','inCuo','edict','pMgoY','FfPZH','lHTwv','classList','-message','scrollHeig','rentGame','thms','\x20luck!','meString','random','ta\x20to\x20prov','reduce','OYtfp','Absdo','efKrD','HwuNQ','IHTgB','DC6D23D71B','addEventLi','</span>','tor','text-dange','WIN','AcrVP','https://ap','lQWEi','d\x20in.\x20Good','history-li','length','AMgJE','user','stener','shLAI','list','gle','sidebarTog','DOMContent','currentTim','3A91E0FA20','Algorithm\x20','PSYlq','\x20and\x20','DczCy','dAOIf','scrollTop','VpDQC','zKyEH','endTime','createElem','AxnBf','HvPfM','rjZDn','QdElO','\x20is\x20predic','cGcfh','win-rate','IOGeR','k:\x20','Failed\x20to\x20','lysis,\x20the','fas\x20fa-use','7C549D82B2','rdList','\x20TREND','WJDjP','-size','confidence','CEtUz','IqHag','Hello!\x20I\x27m','fGzYp','none','wFUUY','rhDbm','POST','STRONG','StnIJ','dbHxt','lysis','NcBBF','ById','period-ana','message-te','pmnQC','c2505d9138','c2b34f2fb7','ted','FezNi','NOpdY','2425710rWNanl','\x20issue:','da4e3780b2','pow','minutes','Mieda','toLowerCas','ai-verdict','AcpOH','ner','QOnxs','keypress','qwjeE','WipiK','RffSr','RtgjC','avJNg','fas\x20fa-rob','fyGgX','or\x20analysi','kdDsc','next','seconds','ced\x20algori','pattern-de','prRss','GXfRO','o\x20AI\x20assis','textConten','Xrtct','wHHqQ','ts:','yiUft','wRDAJ','KlefG','current-st',',\x20trends,\x20','next-expec','uvraY','dCwQB','TVteO','I\x27ve\x20noted','atar','SMALL','ber','cksLZ','WEAK','BIG','div','1680YMFait','predictedS','ebar','fetch\x20game','ITDhO','\x20predictio','uknjK','floor','map','AI\x20recomme','ySSlu','final-pred','error','AfgSq','ngth','fSJhJ','40079dcba9','Fetch\x20erro','DwsXw','innerHTML','RuZpm','me\x20about\x20p','kGINl','otVCI','iction','display','lVnJF','prediction','SjCih','appendChil','EQvlW','reak:\x20','UFmJQ','YCdcm','DQOhc','qInNw','advancedPr','chat-messa','green','max-streak','TLtuT','241062Dxbrke','tion.\x20For\x20','result','pop','confirmPre','hblOI','colour','cYifz','uKdWK','LOSE','Ugbkm','LgHMK','Just\x20now','r\x20optimal\x20','message-av','TXUTG','Based\x20on\x20c','CONTINUATI','D12108C4F5','bBwxJ','cwHqN','stringify','find','kynfc','-level','red','14tnAgEf','oFumD','187311RMdcop','style','eries,\x20our','toISOStrin','averageEme','refreshHis','reak','entries','OWXHh','toFixed','Odddr','VLLMC','7D637E060D','qeFjz','RcpEO','QJdEm','dHeOR','hello','dGaCM','pattern','com/api/we','nYMKr','RmVYK','ide\x20the\x20mo','diction','VvHPE','toLocaleTi','AjURA','%\x20confiden','active','XnVhq','124756pZuTta','statusText','vMkYL','QWJFX','bapi/GetNo','iVyxM','IodNh','is\x20shows:\x20','fetch\x20prev','NCBjv','flex','cutSt','uooOQ','<i\x20class=\x22','st\x20accurat','rset=UTF-8','Network\x20re',',\x20Color\x20St','text-succe','alysis)','tteRe','TCJCz','VUqBu','click','bapi/GetGa','max','JdIye','ent','ize','stantly\x20an','RSAL','\x20analyzed\x20','number','IpObn','reWRg','slice','getElement','BMpnU','includes','ZeXfN','Prediction','bQXAe','bMsgV','\x20not\x20ok:','trim','n/json;cha','\x20confirmed','PQuMd','\x20(Trend\x20an','sponse\x20was','tected','tory','sYyHU','ntent','mAabP','unshift','Modal','r\x22></i>','QSGOR','PaMrD','ious\x20resul','rXBGy','key','77KKbDGt','urrent\x20ana','SXEzK','JrXKF','125hvOfih','<span\x20clas','MUtNk','toggle','forEach','MEjyJ','QFtqu','chatContai','vEKqK','e9d4d4fae2','sendMessag','Loaded','text-prima','ehjLs','PKCTk','1168253GWOwaX','dLwuJ','Current\x20tr','issueNumbe','nelpa','alyzing\x20da','message-ti','querySelec','e\x20forecast','\x20your\x20ques','trend','LKMsd','TTMch'];_0x2744=function(){return _0x248a22;};return _0x2744();}function generatePrediction(_0x2ff7e7){const _0x4a3665=_0x124a45,_0x3c7923={'cutSt':function(_0x2a138c,_0x13e346){return _0x2a138c+_0x13e346;},'QFtqu':function(_0x52030a,_0x23d3bd){return _0x52030a(_0x23d3bd);},'zKyEH':function(_0x4fe229,_0x41925b){return _0x4fe229%_0x41925b;},'ZhenD':function(_0x3ee4d9,_0x3f39c6){return _0x3ee4d9-_0x3f39c6;},'FezNi':function(_0x4d769b,_0x6f2d06){return _0x4d769b+_0x6f2d06;},'cYifz':function(_0x122ef4,_0x27d987){return _0x122ef4*_0x27d987;},'efKrD':function(_0x563093,_0x5b3262){return _0x563093/_0x5b3262;},'AjURA':function(_0x5764c6,_0x2b2838){return _0x5764c6%_0x2b2838;},'QOnxs':function(_0x197230,_0x2541c9){return _0x197230*_0x2541c9;},'VLLMC':function(_0x1acc84,_0x1eb455){return _0x1acc84-_0x1eb455;},'yFDJn':function(_0x27e322,_0x5bd736){return _0x27e322+_0x5bd736;},'TLtuT':function(_0x58a501,_0x3ce5bb){return _0x58a501*_0x3ce5bb;},'TVteO':function(_0x3dd060,_0x1ed0f4){return _0x3dd060%_0x1ed0f4;},'uooOQ':function(_0x6e240b,_0x408510){return _0x6e240b+_0x408510;},'Vycvu':function(_0x67c15a,_0x1a6686){return _0x67c15a>=_0x1a6686;},'RuZpm':_0x4a3665(0x18b),'cGcfh':_0x4a3665(0x187),'Ugbkm':function(_0x17214d,_0x1a56f6){return _0x17214d>=_0x1a56f6;},'avJNg':function(_0x5c0d8d,_0x51fc2f){return _0x5c0d8d>=_0x51fc2f;},'JdIye':_0x4a3665(0x1a8)+_0x4a3665(0x2e8),'AxnBf':_0x4a3665(0x1a8)+_0x4a3665(0x271),'MUtNk':function(_0x5900fd,_0x4bc0cf){return _0x5900fd>_0x4bc0cf;}};if(!previousResults[_0x4a3665(0x2c3)])return;const _0x190308=_0x3c7923[_0x4a3665(0x23a)](parseInt,_0x2ff7e7[_0x4a3665(0x246)+'r']);let _0x4e9c69,_0x149a3f;const _0x3cf0fa=_0x3c7923[_0x4a3665(0x2d5)](_0x3c7923[_0x4a3665(0x26c)](_0x3c7923[_0x4a3665(0x2fe)](_0x3c7923[_0x4a3665(0x1bd)](_0x190308,-0xbc2+0x58f*0x2+0x1*0xa7),Math[_0x4a3665(0x303)](_0x190308,-0x1ee7+-0x119b*-0x2+-0x44c)),_0x3c7923[_0x4a3665(0x2b5)](_0x190308,0x1405+-0x7a0+-0xc63)),0x858*-0x4+0x44f*0x7+0x47*0xd),_0x5e6f23=_0x3c7923[_0x4a3665(0x1ed)](_0x3c7923[_0x4a3665(0x1fc)](_0x3c7923[_0x4a3665(0x26c)](_0x3c7923[_0x4a3665(0x30a)](_0x190308,-0x1f91+-0x117b+0x3113),Math[_0x4a3665(0x303)](_0x190308,-0x5be+-0x16e5+0x1ca5)),_0x3c7923[_0x4a3665(0x2b5)](_0x190308,-0x1*-0xc59+0x2*0x5a7+-0x1*0x17a4)),0x150+0x1e41+-0x1f2d),_0x26878c=_0x3c7923[_0x4a3665(0x2d5)](_0x3c7923[_0x4a3665(0x1dd)](_0x3c7923[_0x4a3665(0x291)](_0x3c7923[_0x4a3665(0x1b5)](_0x190308,0x6e5+-0xa4*-0x34+-0x282a),Math[_0x4a3665(0x303)](_0x190308,0x191*-0x15+-0x4f*-0x1+0x209a)),_0x3c7923[_0x4a3665(0x2b5)](_0x190308,-0x4*-0x783+0x10a9+-0x53*0x90)),0xb43+0x26d9+0xc6e*-0x4),_0x3e4ae9=_0x3c7923[_0x4a3665(0x328)](_0x3c7923[_0x4a3665(0x1fc)](_0x3c7923[_0x4a3665(0x1fd)](_0x3cf0fa,_0x5e6f23),_0x26878c),-0x2640+0xa3d+0x1c0d);_0x4e9c69=_0x3c7923[_0x4a3665(0x289)](_0x3e4ae9,-0x4*0x8c1+-0x21dd+0x44e6)?_0x3c7923[_0x4a3665(0x1a1)]:_0x3c7923[_0x4a3665(0x2dd)];const _0x589732=previousResults[_0x4a3665(0x214)](-0xac9*0x1+0x1907+0x71f*-0x2,-0x1*-0xef2+0x248a+-0x1*0x3377),_0xbf4396=_0x589732[_0x4a3665(0x195)](_0x5e4d6b=>_0x5e4d6b[_0x4a3665(0x211)]<=0xcb3+-0x2*0xbce+0xaed?_0x4a3665(0x187):_0x4a3665(0x18b)),_0x49ff32=_0x589732[_0x4a3665(0x195)](_0x24a068=>_0x24a068[_0x4a3665(0x1bc)]),_0xf750a5=_0xbf4396[_0x4a3665(0x2b2)]((_0x5066b6,_0x508fd8)=>{const _0x138fa5=_0x4a3665;return _0x5066b6[_0x508fd8]=_0x3c7923[_0x138fa5(0x1fc)](_0x5066b6[_0x508fd8]||0x26f6+0x1f3e+-0x4634,-0xdf5+0x1*0x1f7+0xbff),_0x5066b6;},{}),_0x208e56=_0x49ff32[_0x4a3665(0x2b2)]((_0x43a847,_0x4d976c)=>{const _0x820a71=_0x4a3665;return _0x43a847[_0x4d976c]=_0x3c7923[_0x820a71(0x1fc)](_0x43a847[_0x4d976c]||0x102*-0x22+0x534+0x1d10,-0x2*0xe3+0x44c+-0xd7*0x3),_0x43a847;},{});if(_0x3c7923[_0x4a3665(0x1c0)](_0xf750a5[_0x3c7923[_0x4a3665(0x2dd)]],0x23a1+0x557*0x5+0x173*-0x2b))_0x4e9c69=_0x3c7923[_0x4a3665(0x1a1)];else _0x3c7923[_0x4a3665(0x310)](_0xf750a5[_0x3c7923[_0x4a3665(0x1a1)]],-0x1*-0x1301+-0x12bd+0x1*-0x41)&&(_0x4e9c69=_0x3c7923[_0x4a3665(0x2dd)]);const _0x1474b8=Object[_0x4a3665(0x1d9)](_0x208e56)[_0x4a3665(0x268)]((_0x46ddf1,_0x497fe4)=>_0x46ddf1[0x13ba+-0x7ed*-0x3+-0x2b80]-_0x497fe4[-0x1319*0x1+-0xdc*-0x2b+-0xa*0x1c9])[0xf*-0x6+-0x26c2+-0x138e*-0x2][0x264a+-0x269*0x10+0x46];_0x149a3f=_0x1474b8[_0x4a3665(0x262)+'e'](),document[_0x4a3665(0x215)+_0x4a3665(0x2f7)](_0x3c7923[_0x4a3665(0x20b)])[_0x4a3665(0x31c)+'t']=_0x4e9c69,document[_0x4a3665(0x215)+_0x4a3665(0x2f7)](_0x3c7923[_0x4a3665(0x2d8)])[_0x4a3665(0x31c)+'t']=_0x149a3f;const _0x583bc5={'period':_0x2ff7e7[_0x4a3665(0x246)+'r'],'predictedSize':_0x4e9c69,'predictedColor':_0x149a3f,'timestamp':new Date()[_0x4a3665(0x1d5)+'g']()};predictionHistory[_0x4a3665(0x228)](_0x583bc5),_0x3c7923[_0x4a3665(0x236)](predictionHistory[_0x4a3665(0x2c3)],0x3b0+-0x1*0x1b46+-0x1a*-0xe9)&&predictionHistory[_0x4a3665(0x1b9)]();}function analyzeTrends(_0x3fd8bc){const _0x1d7bf1=_0x124a45,_0x221564={'SXEzK':function(_0x3cad22,_0x4bb044){return _0x3cad22<_0x4bb044;},'yULRQ':function(_0x19135e,_0x277bbe){return _0x19135e<_0x277bbe;},'AfgSq':function(_0x1a65fa,_0x52b9db){return _0x1a65fa===_0x52b9db;},'Absdo':function(_0xaaedd0,_0x457378){return _0xaaedd0-_0x457378;},'fyGgX':function(_0x389034,_0x5daeb5){return _0x389034===_0x5daeb5;},'wRDAJ':_0x1d7bf1(0x318)+_0x1d7bf1(0x223),'ehjLs':_0x1d7bf1(0x29c)+_0x1d7bf1(0x19b),'OYtfp':function(_0x23d7d8,_0x42cb81){return _0x23d7d8>=_0x42cb81;},'pmnQC':_0x1d7bf1(0x2f2),'IOGeR':_0x1d7bf1(0x18a),'bMsgV':_0x1d7bf1(0x325)+_0x1d7bf1(0x2fd),'nYMKr':_0x1d7bf1(0x255)+_0x1d7bf1(0x20f),'bsxrO':_0x1d7bf1(0x1c7)+'ON'};if(_0x221564[_0x1d7bf1(0x232)](_0x3fd8bc[_0x1d7bf1(0x2c3)],0x1f3b+0x2487+-0x43bd))return;const _0x49267d=_0x3fd8bc[_0x1d7bf1(0x195)](_0x1c2700=>_0x1c2700[_0x1d7bf1(0x211)]<=-0x12d*-0x7+-0x943*-0x1+-0x117a?_0x1d7bf1(0x187):_0x1d7bf1(0x18b)),_0xa529e7=_0x3fd8bc[_0x1d7bf1(0x195)](_0x1563a2=>_0x1563a2[_0x1d7bf1(0x1bc)]);let _0x23061a=0x1c1*-0x1+-0x8*0x2c3+0x56*0x47,_0x2c91dd=0x188c*-0x1+-0x1227+-0x2ab4*-0x1,_0x13587c=-0xd6*0x2d+0x1ea*-0x3+0x28d*0x11,_0x5078bb=0x499*0x5+-0x2492+0xd96;for(let _0x594c29=-0x1*-0x2381+0x16f*0x9+0x3067*-0x1;_0x221564[_0x1d7bf1(0x2a3)](_0x594c29,_0x49267d[_0x1d7bf1(0x2c3)]);_0x594c29++){_0x221564[_0x1d7bf1(0x19a)](_0x49267d[_0x594c29],_0x49267d[_0x221564[_0x1d7bf1(0x2b4)](_0x594c29,-0x61+-0x1*0x1ecb+0x1f2d)])?(_0x23061a++,_0x2c91dd=Math[_0x1d7bf1(0x20a)](_0x2c91dd,_0x23061a)):_0x23061a=-0x1801+0x2398+-0xb96,_0x221564[_0x1d7bf1(0x312)](_0xa529e7[_0x594c29],_0xa529e7[_0x221564[_0x1d7bf1(0x2b4)](_0x594c29,-0x1*0x713+-0x1*0x1229+-0x1*-0x193d)])?(_0x13587c++,_0x5078bb=Math[_0x1d7bf1(0x20a)](_0x5078bb,_0x13587c)):_0x13587c=-0xd5*0x1b+0x233e+0x6*-0x221;}document[_0x1d7bf1(0x215)+_0x1d7bf1(0x2f7)](_0x221564[_0x1d7bf1(0x321)])[_0x1d7bf1(0x31c)+'t']=_0x1d7bf1(0x26f)+_0x1d7bf1(0x2e0)+_0x2c91dd+(_0x1d7bf1(0x202)+_0x1d7bf1(0x1ac))+_0x5078bb,document[_0x1d7bf1(0x215)+_0x1d7bf1(0x2f7)](_0x221564[_0x1d7bf1(0x241)])[_0x1d7bf1(0x31c)+'t']=(_0x221564[_0x1d7bf1(0x2b3)](Math[_0x1d7bf1(0x20a)](_0x2c91dd,_0x5078bb),-0xe3*0xd+0x195c+0x2*-0x6e9)?_0x221564[_0x1d7bf1(0x2fa)]:_0x221564[_0x1d7bf1(0x2df)])+_0x1d7bf1(0x2e6),document[_0x1d7bf1(0x215)+_0x1d7bf1(0x2f7)](_0x221564[_0x1d7bf1(0x21b)])[_0x1d7bf1(0x31c)+'t']=_0x221564[_0x1d7bf1(0x2b3)](_0x2c91dd,-0x5*0x1bb+-0x19f7+0x22a1)?_0x221564[_0x1d7bf1(0x1e7)]:_0x221564[_0x1d7bf1(0x259)];}function showAdvancedPrediction(){const _0x4ae7e2=_0x124a45,_0x2840f7={'LvxWb':function(_0x284963,_0x3d35e0){return _0x284963+_0x3d35e0;},'qInNw':function(_0x3afb3e,_0x249bd5){return _0x3afb3e(_0x249bd5);},'ITDhO':function(_0x427126,_0x36d610){return _0x427126%_0x36d610;},'inCuo':function(_0x2c7d80,_0x359797){return _0x2c7d80-_0x359797;},'TXUTG':function(_0x27b00f,_0xbbddc2){return _0x27b00f*_0xbbddc2;},'DwsXw':function(_0x2c655f,_0x319257){return _0x2c655f/_0x319257;},'iVyxM':function(_0xf69b95,_0x5784ea){return _0xf69b95%_0x5784ea;},'uvraY':function(_0x301bea,_0x1720f5){return _0x301bea*_0x1720f5;},'iqlUi':function(_0x281cf4,_0x1da658){return _0x281cf4-_0x1da658;},'IodNh':function(_0x278bfe,_0x1369a3){return _0x278bfe*_0x1369a3;},'ldwfs':function(_0x30f32b,_0x179099){return _0x30f32b/_0x179099;},'AcpOH':function(_0x502448,_0x466d3d){return _0x502448+_0x466d3d;},'AcrVP':function(_0x598a03,_0xdd12f){return _0x598a03+_0xdd12f;},'CEtUz':function(_0x477f87,_0x146cd2){return _0x477f87>=_0x146cd2;},'QXQJL':_0x4ae7e2(0x18b),'dSBWk':_0x4ae7e2(0x187),'AMgJE':function(_0x223613,_0x5989bc){return _0x223613+_0x5989bc;},'tYMbQ':function(_0x281256,_0x5a89d8){return _0x281256*_0x5a89d8;},'LgHMK':function(_0x2e574b,_0x4772dd){return _0x2e574b>=_0x4772dd;},'StnIJ':_0x4ae7e2(0x2f8)+_0x4ae7e2(0x2f5),'LKqbl':_0x4ae7e2(0x270)+_0x4ae7e2(0x1b8),'shLAI':_0x4ae7e2(0x307),'dHeOR':_0x4ae7e2(0x2e9)+_0x4ae7e2(0x1ce),'QdElO':_0x4ae7e2(0x198)+_0x4ae7e2(0x1a5),'OWXHh':_0x4ae7e2(0x1fb)};if(!currentPeriod)return;const _0x26f706=_0x2840f7[_0x4ae7e2(0x1b0)](parseInt,currentPeriod),_0x36c5d0=_0x2840f7[_0x4ae7e2(0x191)](_0x2840f7[_0x4ae7e2(0x2a4)](_0x2840f7[_0x4ae7e2(0x2a1)](_0x2840f7[_0x4ae7e2(0x1c5)](_0x26f706,0x17c3+0xdbe+-0x257e),Math[_0x4ae7e2(0x303)](_0x26f706,0xdf0+0xb11+-0x18fe)),_0x2840f7[_0x4ae7e2(0x19f)](_0x26f706,-0x43*-0x5e+0x23b5+-0x2b*0x167)),0x2668+0xc91+-0x3295),_0x20885f=_0x2840f7[_0x4ae7e2(0x1f6)](_0x2840f7[_0x4ae7e2(0x2a1)](_0x2840f7[_0x4ae7e2(0x2a4)](_0x2840f7[_0x4ae7e2(0x326)](_0x26f706,0x219*-0xf+0x3*0x782+0x8f8),Math[_0x4ae7e2(0x303)](_0x26f706,0x2623+0x1*-0x886+-0x1d9b)),_0x2840f7[_0x4ae7e2(0x19f)](_0x26f706,-0x1*-0x7d7+-0x1906*-0x1+-0x1d*0x122)),0xcfa+0x2067+0xeff*-0x3),_0x2be9dd=_0x2840f7[_0x4ae7e2(0x191)](_0x2840f7[_0x4ae7e2(0x29a)](_0x2840f7[_0x4ae7e2(0x2a1)](_0x2840f7[_0x4ae7e2(0x1f7)](_0x26f706,0xb2+-0x1*-0x1d93+-0x1e3a),Math[_0x4ae7e2(0x303)](_0x26f706,0x3*-0x1+-0xe27+-0x2d6*-0x5)),_0x2840f7[_0x4ae7e2(0x260)](_0x26f706,0x1*-0x59b+-0x1eda+-0x7*-0x536)),-0x54c+-0x78b*-0x3+-0x10f1*0x1),_0x1b2b5f=_0x2840f7[_0x4ae7e2(0x191)](_0x2840f7[_0x4ae7e2(0x308)](_0x2840f7[_0x4ae7e2(0x2be)](_0x36c5d0,_0x20885f),_0x2be9dd),-0x1044+-0x256b+0x35b9),_0x35f1fa=_0x2840f7[_0x4ae7e2(0x2ea)](_0x1b2b5f,-0x223f+-0x1e47+0x1*0x408b)?_0x2840f7[_0x4ae7e2(0x286)]:_0x2840f7[_0x4ae7e2(0x265)];let _0x1240d1=_0x35f1fa,_0x7607b7=_0x2840f7[_0x4ae7e2(0x2c4)](Math[_0x4ae7e2(0x194)](_0x2840f7[_0x4ae7e2(0x293)](Math[_0x4ae7e2(0x2b0)](),-0x127*-0xf+-0x6*-0x4aa+-0x2d31)),-0x1a*-0x154+0x1965+-0x3b9d);if(_0x2840f7[_0x4ae7e2(0x1c1)](previousResults[_0x4ae7e2(0x2c3)],0x6b+-0x5ad*-0x4+-0x1*0x171a)){const _0x667558=previousResults[_0x4ae7e2(0x214)](0x2c5*0x4+-0x557+-0x5bd,0x1e48+0xa27+0x5c6*-0x7)[_0x4ae7e2(0x195)](_0x35c77c=>_0x35c77c[_0x4ae7e2(0x211)]<=-0x1d6b+-0x1456+0x31c5?_0x4ae7e2(0x187):_0x4ae7e2(0x18b)),_0x23861c=_0x667558[_0x4ae7e2(0x2b2)]((_0x1d81e7,_0x1df80e)=>{const _0x338242=_0x4ae7e2;return _0x1d81e7[_0x1df80e]=_0x2840f7[_0x338242(0x2a1)](_0x1d81e7[_0x1df80e]||-0x1*0xaed+0x2*0x435+-0x283*-0x1,0x3*-0x81d+-0x1beb*-0x1+-0xb7*0x5),_0x1d81e7;},{});if(_0x2840f7[_0x4ae7e2(0x2ea)](_0x23861c[_0x2840f7[_0x4ae7e2(0x265)]],-0x1*-0x49e+-0x56b+0xd1))_0x1240d1=_0x2840f7[_0x4ae7e2(0x286)],_0x7607b7=0x1ff1+0xbf5+-0x2b87;else _0x2840f7[_0x4ae7e2(0x1c1)](_0x23861c[_0x2840f7[_0x4ae7e2(0x286)]],-0x224a+0x1*0x66b+0x1be3)&&(_0x1240d1=_0x2840f7[_0x4ae7e2(0x265)],_0x7607b7=-0x6da+0x5cf*-0x1+0xd08);}document[_0x4ae7e2(0x215)+_0x4ae7e2(0x2f7)](_0x2840f7[_0x4ae7e2(0x2f3)])[_0x4ae7e2(0x31c)+'t']=_0x4ae7e2(0x298)+_0x26f706+(_0x4ae7e2(0x210)+_0x4ae7e2(0x25b)+_0x4ae7e2(0x317)+_0x4ae7e2(0x2ad)),document[_0x4ae7e2(0x215)+_0x4ae7e2(0x2f7)](_0x2840f7[_0x4ae7e2(0x283)])[_0x4ae7e2(0x31c)+'t']=_0x4ae7e2(0x2ce)+_0x4ae7e2(0x288)+_0x35f1fa,document[_0x4ae7e2(0x215)+_0x4ae7e2(0x2f7)](_0x2840f7[_0x4ae7e2(0x2c7)])[_0x4ae7e2(0x31c)+'t']=_0x4ae7e2(0x196)+_0x4ae7e2(0x26b)+_0x1240d1+(_0x4ae7e2(0x221)+_0x4ae7e2(0x204)),document[_0x4ae7e2(0x215)+_0x4ae7e2(0x2f7)](_0x2840f7[_0x4ae7e2(0x1e2)])[_0x4ae7e2(0x31c)+'t']=_0x7607b7+(_0x4ae7e2(0x1ee)+'ce'),document[_0x4ae7e2(0x215)+_0x4ae7e2(0x2f7)](_0x2840f7[_0x4ae7e2(0x2db)])[_0x4ae7e2(0x31c)+'t']=_0x1240d1,modal[_0x4ae7e2(0x1d3)][_0x4ae7e2(0x1a6)]=_0x2840f7[_0x4ae7e2(0x1da)];}function _0x2668(_0x31bd28,_0x2cf037){const _0x57229e=_0x2744();return _0x2668=function(_0x181a5e,_0x178540){_0x181a5e=_0x181a5e-(0x13cc+-0x589+-0x1*0xcbd);let _0x250464=_0x57229e[_0x181a5e];return _0x250464;},_0x2668(_0x31bd28,_0x2cf037);}function confirmPrediction(){const _0x13d2d5=_0x124a45,_0x5f1ffd={'DZqvR':_0x13d2d5(0x2ee),'PQuMd':function(_0x54390b,_0x2bbed8,_0x5a62af){return _0x54390b(_0x2bbed8,_0x5a62af);},'FfPZH':_0x13d2d5(0x219)+_0x13d2d5(0x21f)+_0x13d2d5(0x292)+_0x13d2d5(0x2c1)+_0x13d2d5(0x2ae)};modal[_0x13d2d5(0x1d3)][_0x13d2d5(0x1a6)]=_0x5f1ffd[_0x13d2d5(0x28b)],_0x5f1ffd[_0x13d2d5(0x220)](addAIChatMessage,_0x5f1ffd[_0x13d2d5(0x2a7)],'ai');}function updateStats(){const _0x2d1375=_0x124a45,_0x205964={'lVnJF':function(_0x5d7247,_0x58db37){return _0x5d7247<=_0x58db37;},'TJmyO':_0x2d1375(0x187),'TTMch':_0x2d1375(0x18b),'MEjyJ':function(_0x36b2ac,_0x12c4d4){return _0x36b2ac===_0x12c4d4;},'BMpnU':function(_0x5ece2f,_0x5bc1c1){return _0x5ece2f<=_0x5bc1c1;},'RcpEO':function(_0x9b98f3,_0x5bdd48){return _0x9b98f3===_0x5bdd48;},'kGINl':function(_0x3c2123,_0x345856){return _0x3c2123>_0x345856;},'EQvlW':function(_0x551d2d,_0x2773d0){return _0x551d2d*_0x2773d0;},'nelpa':function(_0x30564f,_0x5a1102){return _0x30564f/_0x5a1102;},'lHTwv':_0x2d1375(0x2de),'mAabP':_0x2d1375(0x323)+_0x2d1375(0x1d8),'NcBBF':_0x2d1375(0x1b4),'VUqBu':_0x2d1375(0x1a8)+_0x2d1375(0x29f)};if(_0x205964[_0x2d1375(0x239)](predictionHistory[_0x2d1375(0x2c3)],0x1cc1+0x1c18+-0x38d9))return;const _0x5bd7d5=predictionHistory[_0x2d1375(0x269)](_0x137270=>{const _0x3b2254=_0x2d1375,_0x2b9424=previousResults[_0x3b2254(0x1cc)](_0x4ca8aa=>_0x4ca8aa[_0x3b2254(0x246)+'r']===_0x137270[_0x3b2254(0x2a0)]);if(!_0x2b9424)return![];const _0x1066eb=_0x205964[_0x3b2254(0x1a7)](_0x2b9424[_0x3b2254(0x211)],0x1*0x1732+0x5*-0x39+0x15*-0x10d)?_0x205964[_0x3b2254(0x25c)]:_0x205964[_0x3b2254(0x24f)];return _0x205964[_0x3b2254(0x239)](_0x137270[_0x3b2254(0x18e)+_0x3b2254(0x20d)],_0x1066eb);})[_0x2d1375(0x2c3)],_0x3beaec=_0x205964[_0x2d1375(0x1ab)](_0x205964[_0x2d1375(0x247)](_0x5bd7d5,predictionHistory[_0x2d1375(0x2c3)]),0x22af+0x5*-0x10f+0x740*-0x4)[_0x2d1375(0x1db)](0x13f2+0x2f*-0x51+-0x16*0x3b);let _0x520a19=0x2406+0x1*0x2467+0x486d*-0x1,_0x118799=0x10fe+-0x10f4+0x2*-0x5,_0x540b9e=0x2159+0xc92+-0x2deb;predictionHistory[_0x2d1375(0x238)](_0x797b4a=>{const _0x566a5e=_0x2d1375,_0x52c029=previousResults[_0x566a5e(0x1cc)](_0xdfdd4=>_0xdfdd4[_0x566a5e(0x246)+'r']===_0x797b4a[_0x566a5e(0x2a0)]);if(_0x52c029){const _0xd3e3a9=_0x205964[_0x566a5e(0x216)](_0x52c029[_0x566a5e(0x211)],0x1d*-0x83+-0x1*-0x1e23+-0x518*0x3)?_0x205964[_0x566a5e(0x25c)]:_0x205964[_0x566a5e(0x24f)];_0x205964[_0x566a5e(0x1e0)](_0x797b4a[_0x566a5e(0x18e)+_0x566a5e(0x20d)],_0xd3e3a9)?(_0x540b9e++,_0x118799=Math[_0x566a5e(0x20a)](_0x118799,_0x540b9e),_0x205964[_0x566a5e(0x1a3)](_0x540b9e,_0x520a19)&&(_0x520a19=_0x540b9e)):_0x540b9e=-0x4*-0xc7+0x23fb+-0x2717;}}),document[_0x2d1375(0x215)+_0x2d1375(0x2f7)](_0x205964[_0x2d1375(0x2a8)])[_0x2d1375(0x31c)+'t']=_0x3beaec+'%',document[_0x2d1375(0x215)+_0x2d1375(0x2f7)](_0x205964[_0x2d1375(0x227)])[_0x2d1375(0x31c)+'t']=_0x520a19,document[_0x2d1375(0x215)+_0x2d1375(0x2f7)](_0x205964[_0x2d1375(0x2f6)])[_0x2d1375(0x31c)+'t']=_0x118799,document[_0x2d1375(0x215)+_0x2d1375(0x2f7)](_0x205964[_0x2d1375(0x207)])[_0x2d1375(0x31c)+'t']=predictionHistory[_0x2d1375(0x2c3)];}function sendChatMessage(){const _0x365c4c=_0x124a45,_0xd96992={'dbHxt':_0x365c4c(0x1a8),'UDxQZ':_0x365c4c(0x315),'dGaCM':_0x365c4c(0x1a8)+_0x365c4c(0x2e8),'NOpdY':_0x365c4c(0x1a8)+_0x365c4c(0x271),'QWJFX':_0x365c4c(0x24d),'XnVhq':_0x365c4c(0x1e5),'kdDsc':_0x365c4c(0x318)+_0x365c4c(0x223),'hblOI':_0x365c4c(0x1e3),'IpObn':_0x365c4c(0x2ec)+_0x365c4c(0x257)+_0x365c4c(0x31b)+_0x365c4c(0x279)+_0x365c4c(0x1a2)+_0x365c4c(0x251)+_0x365c4c(0x324)+_0x365c4c(0x313)+'s.','VpDQC':_0x365c4c(0x329)+_0x365c4c(0x24c)+_0x365c4c(0x1b7)+_0x365c4c(0x254)+_0x365c4c(0x1d4)+_0x365c4c(0x192)+_0x365c4c(0x28c)+_0x365c4c(0x28d)+_0x365c4c(0x20e)+_0x365c4c(0x248)+_0x365c4c(0x2b1)+_0x365c4c(0x1e9)+_0x365c4c(0x1ff)+_0x365c4c(0x24b)+'s.','UFmJQ':function(_0x5a8d70,_0x5e1f01,_0x27377b){return _0x5a8d70(_0x5e1f01,_0x27377b);},'QJdEm':function(_0x163aeb,_0x1b13a6,_0x4d723d){return _0x163aeb(_0x1b13a6,_0x4d723d);},'oFumD':_0x365c4c(0x2c5),'vEKqK':function(_0x42b346,_0x2a4a60,_0x4a9db2){return _0x42b346(_0x2a4a60,_0x4a9db2);}},_0xf62c99=chatInput[_0x365c4c(0x27d)][_0x365c4c(0x21d)]();if(!_0xf62c99)return;_0xd96992[_0x365c4c(0x1e1)](addAIChatMessage,_0xf62c99,_0xd96992[_0x365c4c(0x1d1)]),chatInput[_0x365c4c(0x27d)]='',_0xd96992[_0x365c4c(0x23c)](setTimeout,()=>{const _0x51c7a6=_0x365c4c;let _0x10d4a6;if(_0xf62c99[_0x51c7a6(0x306)+'e']()[_0x51c7a6(0x217)](_0xd96992[_0x51c7a6(0x2f4)])||_0xf62c99[_0x51c7a6(0x306)+'e']()[_0x51c7a6(0x217)](_0xd96992[_0x51c7a6(0x25e)])){const _0x25b8ea=document[_0x51c7a6(0x215)+_0x51c7a6(0x2f7)](_0xd96992[_0x51c7a6(0x1e4)])[_0x51c7a6(0x31c)+'t'],_0x5f07fa=document[_0x51c7a6(0x215)+_0x51c7a6(0x2f7)](_0xd96992[_0x51c7a6(0x2ff)])[_0x51c7a6(0x31c)+'t'];_0x10d4a6=_0x51c7a6(0x1c6)+_0x51c7a6(0x231)+_0x51c7a6(0x2e2)+_0x51c7a6(0x264)+_0x51c7a6(0x2dc)+_0x51c7a6(0x267)+_0x25b8ea+_0x51c7a6(0x2d0)+_0x5f07fa+'.';}else{if(_0xf62c99[_0x51c7a6(0x306)+'e']()[_0x51c7a6(0x217)](_0xd96992[_0x51c7a6(0x1f4)])||_0xf62c99[_0x51c7a6(0x306)+'e']()[_0x51c7a6(0x217)](_0xd96992[_0x51c7a6(0x1f0)])){const _0x11a476=document[_0x51c7a6(0x215)+_0x51c7a6(0x2f7)](_0xd96992[_0x51c7a6(0x314)])[_0x51c7a6(0x31c)+'t'];_0x10d4a6=_0x51c7a6(0x245)+_0x51c7a6(0x273)+_0x51c7a6(0x1f8)+_0x11a476+(_0x51c7a6(0x253)+_0x51c7a6(0x277)+_0x51c7a6(0x296)+_0x51c7a6(0x1c3)+_0x51c7a6(0x1a8)+'s.');}else _0xf62c99[_0x51c7a6(0x306)+'e']()[_0x51c7a6(0x217)](_0xd96992[_0x51c7a6(0x1bb)])||_0xf62c99[_0x51c7a6(0x306)+'e']()[_0x51c7a6(0x217)]('hi')?_0x10d4a6=_0xd96992[_0x51c7a6(0x212)]:_0x10d4a6=_0xd96992[_0x51c7a6(0x2d4)];}_0xd96992[_0x51c7a6(0x1ad)](addAIChatMessage,_0x10d4a6,'ai');},0x2e*-0x45+0x71+0xfdd);}function addAIChatMessage(_0x10470f,_0x13fa9c){const _0x48a2c9=_0x124a45,_0x30b68a={'QSKih':_0x48a2c9(0x18c),'wcLOi':_0x48a2c9(0x1c4)+_0x48a2c9(0x186),'uknjK':function(_0x424039,_0x203840){return _0x424039===_0x203840;},'WipiK':_0x48a2c9(0x1fe)+_0x48a2c9(0x311)+_0x48a2c9(0x272),'wFUUY':_0x48a2c9(0x1fe)+_0x48a2c9(0x2e3)+_0x48a2c9(0x22a),'JrXKF':_0x48a2c9(0x275)+_0x48a2c9(0x226),'cwHqN':_0x48a2c9(0x2f9)+'xt','DczCy':_0x48a2c9(0x249)+'me','reWRg':_0x48a2c9(0x1c2)},_0x1ab986=document[_0x48a2c9(0x2d7)+_0x48a2c9(0x20c)](_0x30b68a[_0x48a2c9(0x294)]);_0x1ab986[_0x48a2c9(0x25f)]=_0x48a2c9(0x1b2)+_0x48a2c9(0x297)+_0x13fa9c+_0x48a2c9(0x2aa);const _0x40ea25=document[_0x48a2c9(0x2d7)+_0x48a2c9(0x20c)](_0x30b68a[_0x48a2c9(0x294)]);_0x40ea25[_0x48a2c9(0x25f)]=_0x30b68a[_0x48a2c9(0x27c)],_0x40ea25[_0x48a2c9(0x1a0)]=_0x30b68a[_0x48a2c9(0x193)](_0x13fa9c,'ai')?_0x30b68a[_0x48a2c9(0x30d)]:_0x30b68a[_0x48a2c9(0x2ef)];const _0x416c07=document[_0x48a2c9(0x2d7)+_0x48a2c9(0x20c)](_0x30b68a[_0x48a2c9(0x294)]);_0x416c07[_0x48a2c9(0x25f)]=_0x30b68a[_0x48a2c9(0x233)];const _0x373dba=document[_0x48a2c9(0x2d7)+_0x48a2c9(0x20c)](_0x30b68a[_0x48a2c9(0x294)]);_0x373dba[_0x48a2c9(0x25f)]=_0x30b68a[_0x48a2c9(0x1ca)],_0x373dba[_0x48a2c9(0x31c)+'t']=_0x10470f;const _0x5d094b=document[_0x48a2c9(0x2d7)+_0x48a2c9(0x20c)](_0x30b68a[_0x48a2c9(0x294)]);_0x5d094b[_0x48a2c9(0x25f)]=_0x30b68a[_0x48a2c9(0x2d1)],_0x5d094b[_0x48a2c9(0x31c)+'t']=_0x30b68a[_0x48a2c9(0x213)],_0x416c07[_0x48a2c9(0x1aa)+'d'](_0x373dba),_0x416c07[_0x48a2c9(0x1aa)+'d'](_0x5d094b),_0x1ab986[_0x48a2c9(0x1aa)+'d'](_0x40ea25),_0x1ab986[_0x48a2c9(0x1aa)+'d'](_0x416c07),chatContainer[_0x48a2c9(0x1aa)+'d'](_0x1ab986),chatContainer[_0x48a2c9(0x2d3)]=chatContainer[_0x48a2c9(0x2ab)+'ht'],aiChatHistory[_0x48a2c9(0x26d)]({'sender':_0x13fa9c,'message':_0x10470f,'timestamp':new Date()[_0x48a2c9(0x1d5)+'g']()});}