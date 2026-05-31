import 'package:flutter/material.dart';
import 'package:messagerie_dart_project/components/custom_drawer_tile.dart';
import 'package:messagerie_dart_project/pages/login.dart';
import 'package:messagerie_dart_project/pages/main_page.dart';
import 'package:messagerie_dart_project/pages/message.dart';
import 'package:messagerie_dart_project/pages/messages_list.dart';
import 'package:messagerie_dart_project/pages/profile.dart';
import 'package:messagerie_dart_project/pages/register.dart';
class custom_drawer extends StatelessWidget {//convention
  const custom_drawer({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Drawer(
        child: Column(
          children: [
            custom_drawer_tile(title: "Acceuil",
                icon: Icons.home,
                onTap: (){
                  Navigator.pop(context);
                  Navigator.push(
                    context,
                    //MaterialPageRoute(builder: (context) => MyHomePage(title: "cc",)),
                    MaterialPageRoute(builder: (context) => mainPage()),
                  );
                }),
            //tuile avk une icone, txt, et une fct de nav

            custom_drawer_tile(
              title: "Liste des messages",
              icon: Icons.warning_amber_sharp,
              onTap: (){
                Navigator.pop(context);
                Navigator.push(context,
                  MaterialPageRoute(builder: (context) => messagesList()),
                );

              },
            ),
            custom_drawer_tile(
              title: "profile",
              icon: Icons.one_k_plus,
              onTap: (){
                Navigator.pop(context);
                Navigator.push(context,
                  MaterialPageRoute(builder: (context) => profile()),
                );

              },
            ),
            custom_drawer_tile(
              title: "Se connecter",
              icon: Icons.one_k_plus,
              onTap: (){
                Navigator.pop(context);
                Navigator.push(context,
                  MaterialPageRoute(builder: (context) => login()),
                );

              },
            ),
            custom_drawer_tile(
              title: "s'inscrire",
              icon: Icons.one_k_plus,
              onTap: (){
                Navigator.pop(context);
                Navigator.push(context,
                  MaterialPageRoute(builder: (context) => register()),
                );

              },
            ),

          ],
        ),
      ),
    );
  }
}