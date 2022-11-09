select customers from orders innerjoin customer on customers.custid = orders.custid
select customers from customer where custid not in (select custid from orders)