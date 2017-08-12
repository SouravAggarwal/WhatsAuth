package com.example.sourav.whatsauth;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import org.json.JSONObject;

import io.socket.client.Ack;
import io.socket.client.Socket;
import io.socket.emitter.Emitter;

public class MainActivity extends AppCompatActivity {
    public Socket socket;
    JSONObject obj;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        // to instantiate
        Socket_getterSetter app = (Socket_getterSetter) this.getApplication();
        socket = app.getSocket();
        Intent i = getIntent();
        }

    //View function for Scaning QR code
    public void scanqr(View v) {
        try {

            _createConnection();
            Intent i = new Intent(this, QrCode_Scanner.class);
            startActivity(i);
        }catch (Exception e){
            e.printStackTrace();
        }
    }


    // public void clicked(View v) {

    public void _createConnection() {
        try {


            System.out.println("hello");
            socket.on(Socket.EVENT_CONNECT, new Emitter.Listener() {

                @Override
                public void call(Object... args) {

                    socket.emit("message", obj, new Ack() {
                        @Override
                        public void call(Object... args) {
                            System.out.println("fist::  " + args.toString());

                        }
                        //   Log.i()"helloo"+args);


                    });

                }


            }).on("event", new Emitter.Listener() {

                @Override
                public void call(Object... args) {
                    System.out.println("second");
                }

            }).on(Socket.EVENT_DISCONNECT, new Emitter.Listener() {

                @Override
                public void call(Object... args) {
                    System.out.println("third");
                }

            });
            socket.connect();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
