// 1-kod bu yerda hech qanaqa asinxronlik yo'q.

console.log('Start')

// 2-kod bu kodni qo'shganimizdan keyin 1-kod keyin -2kod bajarilayotganini ko'rishimiz mumkin.
// bu sinxron operratsiya deyiladi.

console.log('Start 2')

// 3-kod bu kodda console.log ni bir necha soniyadan keyin ishga tushiramiz setTimeout orqali bu asinxronlik deyiladi. setTimeout javascriptga kirmaydi bu brouser api orqali paydo bo'lgan windows elementi ekanligini ko'rishimiz mumkin.

window.setTimeout(function() {
    console.log('Inside timeout, after 2000 mseconds')
}, 2000)

// bu kod setTimeoutdan oldin bajariladi 0 ms bo'lgan taqdirda ham End 3-bo'lib bajariladi.

console.log('End')

// bular qanday qilib registratsiya qilinib qolib keyin kerakli vaqt o'tgandan keyin chaqirilyapdi, adashib ketmayapti deb o'ylayotgan bo'lsangiz bu hammasi eventLoop orqali amalga oshirilyapti.
// bu degani setTimeout vaqti o'tguncha brauzer api registatsiya qilib qo'yadi, stekida saqlanadi keyin esa navbatga tashlanadi. U yerdan esa bajarilgani yuboriladi.

/*

   ///////////////    ////////////////////
   //           //    //                //
   //Call stack //    //Web apia        //
   //           //    //                //
   ///////////////    ////////////////////

    |  ^
    v  |

   ///////////////////////////////////////
   //                                   //
   //Callback Queue                     //
   //                                   //
   ///////////////////////////////////////
   
*/

// click, slushatellar, sobitiyalar va hakazolar asinxron funksiyalarga kiradi.


// 5-kod timeout2sec funsiyasasiga yana misol.

function timeout2sec() {
    console.log('timeout2sec')
}

setTimeout(timeout2sec, 2000)

