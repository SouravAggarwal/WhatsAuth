package com.example.sourav.whatsauth;

import android.app.Application;
import android.provider.SyncStateContract;

import java.net.URISyntaxException;
import java.util.logging.SocketHandler;

import io.socket.client.IO;
import io.socket.client.Socket;

/**
 * Created by Sourav on 09-Jul-17.
 */

public  class Socket_getterSetter extends Application {
    private Socket mSocket;
    {
        try {
            mSocket = IO.socket("http://192.168.0.3:8000");
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        }
    }

    public Socket getSocket() {
        return mSocket;
    }
}
