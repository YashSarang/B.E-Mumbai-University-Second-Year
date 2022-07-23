
package com.flappybird.controller;

import com.flappybird.model.Bird;
import java.awt.event.KeyEvent;

public class Controller implements IStrategy {

    @Override
    public void controller(Bird bird, KeyEvent kevent) {
    }

    @Override
    public void controllerReleased(Bird bird, KeyEvent kevent) {
        if(kevent.getKeyCode() == KeyEvent.VK_SPACE) {
            bird.jump();
        }
    }
    
}
