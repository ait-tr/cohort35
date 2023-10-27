package hometask;

/**
 * 10/27/2023
 * lesson_38
 *
 * @author Marsel Sidikov (AIT TR)
 */
public class RemoteController { // пуль от телевизора

    private TV tv; // ссылка на телевизор

    public RemoteController(TV tv) {
        this.tv = tv;
    }

    public void on(int channelNumber) { // метод включения канала по номеру
        tv.onChannel(channelNumber);
    }
}
