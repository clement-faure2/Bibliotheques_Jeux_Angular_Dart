import 'package:flutter/material.dart';

class messagesList extends StatefulWidget {
  const messagesList({super.key});

  @override
  State<messagesList> createState() => _messagesListState();
}

class _messagesListState extends State<messagesList> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Conversations"),
      ),
    );
  }
}

