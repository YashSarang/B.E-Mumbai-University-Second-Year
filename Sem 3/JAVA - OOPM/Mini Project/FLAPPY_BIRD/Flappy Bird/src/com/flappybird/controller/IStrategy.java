
package com.flappybird.controller;

import com.flappybird.model.Bird;
import java.awt.event.KeyEvent;

public interface IStrategy {
    
    public void controller(Bird bird, KeyEvent kevent);
    public void controllerReleased(Bird bird, KeyEvent kevent);
}
