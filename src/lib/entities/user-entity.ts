class UserEntity {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: Date | null;
  updatedAt: Date | null;

  constructor() {
    this.id = "";
    this.name = "";
    this.email = "";
    this.role = "";
    this.createdAt = null;
    this.updatedAt = null;
  }
}

export { UserEntity };
