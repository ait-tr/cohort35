package layers.models;

/**
 * 10/27/2023
 * lesson_38_1
 *
 * @author Marsel Sidikov (AIT TR)
 */
public class Order {

    private String customerEmail;
    private String productTitle;

    private int count;

    public Order(String customerEmail, String productTitle, int count) {
        this.customerEmail = customerEmail;
        this.productTitle = productTitle;
        this.count = count;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public String getProductTitle() {
        return productTitle;
    }

    public void setProductTitle(String productTitle) {
        this.productTitle = productTitle;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
