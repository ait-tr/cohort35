package hashMap;

import java.util.Collection;
import java.util.Set;

public interface InterfaceHashMap<K, V>{
    V put(K key, V value);

    V get(K key);

    V remove(K key);

    int size();

    boolean isEmpty();

    boolean containsKey(K key);
    void clear();
    Set<K> keySet();
    Collection<V> values();
    V getOrDefault(Object key, V defaultValue);
}