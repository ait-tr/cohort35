package hometask;

/**
 * 10/27/2023
 * lesson_38
 *
 * @author Marsel Sidikov (AIT TR)
 */
public class TV { // телевизор

    private static final int MAX_CHANNELS_COUNT = 5;

    private Channel[] channels; // множество каналов, индекс канала - и есть его номер

    private int channelsCount; // количество каналов

    public TV() {
        this.channels = new Channel[MAX_CHANNELS_COUNT];
    }

    public void addChannel(Channel channel) {
        this.channels[channelsCount] = channel;
        channelsCount++;
    }

    public void onChannel(int channelNumber) {
        channels[channelNumber].showProgram(); // вызываем у канала с номером channelNumber метод showProgram
    }
}
