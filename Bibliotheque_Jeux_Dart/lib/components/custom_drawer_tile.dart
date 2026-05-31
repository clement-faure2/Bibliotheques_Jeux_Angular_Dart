import 'package:flutter/material.dart';


class custom_drawer_tile extends StatelessWidget {
  //attributs
  final String title;
  final IconData icon;
  final void Function()? onTap;
  const custom_drawer_tile({
    super.key,
    required this.title,
    required this.icon,
    required this.onTap
  });

  //UI
  @override
  Widget build(BuildContext context) {
    return  ListTile(
      title: Text(title),
      leading: Icon(icon),
      onTap: onTap,
    );
  }
}
