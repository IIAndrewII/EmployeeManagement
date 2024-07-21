import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProfileService } from '../../services/Profile.Service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profiles: any[] = [];
  filteredProfiles = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadProfiles();
  }

  loadProfiles(): void {
    this.profileService.getAllProfiles().subscribe(
      data => {
        this.profiles = data;
        this.filteredProfiles.data = data;
        this.filteredProfiles.paginator = this.paginator;
      },
      error => console.error('Error fetching profiles:', error)
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredProfiles.filter = filterValue.trim().toLowerCase();
  }

  editProfile(profile: any): void {
    // Implement edit functionality
  }

  deleteProfile(id: number): void {
    this.profileService.deleteProfile(id).subscribe(() => {
      this.loadProfiles();
    });
  }
}
