namespace cap.learning;

entity Products {
    key ID      : Integer;
    name        : String(100);
    description : String(255);
    price       : Decimal(10,2);
    currency    : String(3);
}